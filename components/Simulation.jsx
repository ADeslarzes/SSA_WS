import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as satellite from 'satellite.js';

import getStarfield from '../src/getStarfield';
import { getFresnelMat } from '../src/getFresnelMat';

const Simulation = ({ onLoad }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!window) return;

    if(canvasRef.current.children.length > 1) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    canvasRef.current.appendChild(renderer.domElement);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding;

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(earthGroup);
    new OrbitControls(camera, renderer.domElement);

    const detail = 20;
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(2, detail);
    const material = new THREE.MeshPhongMaterial({
      map: loader.load('/earth/00_earthmap1k.jpg'),
      specularMap: loader.load('/earth/02_earthspec1k.jpg'),
      bumpMap: loader.load('/earth/01_earthbump1k.jpg'),
      bumpScale: 4,
    });
    const earthMesh = new THREE.Mesh(geometry, material);
    earthGroup.add(earthMesh);

    const lightsMat = new THREE.MeshBasicMaterial({
      map: loader.load('/earth/03_earthlights1k.jpg'),
      blending: THREE.AdditiveBlending,
    });
    const lightsMesh = new THREE.Mesh(geometry, lightsMat);
    earthGroup.add(lightsMesh);

    const cloudsMat = new THREE.MeshStandardMaterial({
      map: loader.load('/earth/04_earthcloudmap.jpg'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: loader.load('/earth/05_earthcloudmaptrans.jpg'),
    });
    const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(geometry, fresnelMat);
    glowMesh.scale.setScalar(1.01);
    earthGroup.add(glowMesh);

    const stars = getStarfield({ numStars: 1000 });
    scene.add(stars);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    //////////////////////////////////////////////////// SATELLITE ORBITS ////////////////////////////////////////////////////
    const satelliteOrbitData = [];
    
    // Function to create a text sprite
    function createTextSprite(text) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Set font and measure text width
      context.font = '60px Arial';
      const textMetrics = context.measureText(text);
      const textWidth = textMetrics.width;
      
      // Adjust canvas size based on text width and set height
      canvas.width = textWidth;
      canvas.height = 64; // Adjust height to fit the text
      
      // Set font and fill style again after canvas resize
      context.font = '48px Arial';
      context.fillStyle = 'white';
      
      // Draw text centered on the canvas
      context.fillText(text, 0, 38); // Adjust Y position to vertically center text
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      
      // Adjust scale to your needs, keeping aspect ratio
      const aspectRatio = canvas.width / canvas.height;
      sprite.scale.set(aspectRatio * 0.1, 0.1, 1); // Adjusted scaling for better fit

      return sprite;
    } 

    function addSatellite(tle, name, color) {
      const satelliteGroup = new THREE.Group();
      const satelliteGeometry = new THREE.SphereGeometry(0.009, 32, 32);
      const satelliteMaterial = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 20,
        metalness: 1,
        roughness: 0,
      });

      const nameSprite = createTextSprite(name);
      nameSprite.position.set(0, 0.05, 0); // Position the label slightly above the satellite
      satelliteGroup.add(nameSprite);

      const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      satelliteGroup.add(satelliteMesh);

      earthGroup.add(satelliteGroup);
      const satrec = satellite.twoline2satrec(tle[0], tle[1]);
      satelliteOrbitData.push({ group: satelliteGroup, satrec: satrec });
    }

    fetch('/data/TLE_Light.json')
      .then(response => response.json())
      .then(data => {
        Object.entries(data).forEach(([name, sat]) => {
          addSatellite(sat.tle, name, sat.color);
        });
        if (onLoad) onLoad();
      })
      .catch(error => console.error('Error loading TLE data:', error));

    function updateSatellitePosition(satelliteData, gmst) {
      const positionAndVelocity = satellite.propagate(satelliteData.satrec, new Date());
      const positionEci = positionAndVelocity.position;

      if (positionEci) {
        const positionGd = satellite.eciToGeodetic(positionEci, gmst);
        const longitude = positionGd.longitude;
        const latitude = positionGd.latitude;
        const altitude = positionGd.height / 200;

        const earthRadius = 1;
        const radius = earthRadius + altitude;

        satelliteData.group.position.set(
          radius * Math.cos(latitude) * Math.cos(longitude),
          radius * Math.sin(latitude),
          radius * Math.cos(latitude) * Math.sin(longitude)
        );
      }
    }

    const earthRotationSpeed = 2 * Math.PI / 8640;

    function animate() {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += earthRotationSpeed;
      lightsMesh.rotation.y += earthRotationSpeed;
      cloudsMesh.rotation.y += earthRotationSpeed * 2;
      glowMesh.rotation.y += earthRotationSpeed;
      //stars.rotation.y -= 0;

      const now = new Date();
      const gmst = satellite.gstime(now);

      satelliteOrbitData.forEach(satelliteData => {
        updateSatellitePosition(satelliteData, gmst);
      });

      renderer.render(scene, camera);
    }

    animate();

    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div ref={canvasRef} className="w-screen h-screen absolute inset-0 flex justify-center items-center z-20 bg-black">
      <div className="flex justify-center items-center text-white animate-pulse">
        {/* <canvas id="bg"></canvas> */}
      </div>
    </div>
  );
};

export default Simulation;
