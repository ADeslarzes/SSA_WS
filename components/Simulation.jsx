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

    if (canvasRef.current.children.length > 1) return;

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

    // Function to load textures with fallback
    const loadTextureWithFallback = (primaryUrl, fallbackUrl) => {
      return new Promise((resolve) => {
        loader.load(
          primaryUrl,
          (texture) => resolve(texture),
          undefined,
          () => {
            // On error, load the fallback texture
            loader.load(fallbackUrl, (fallbackTexture) => resolve(fallbackTexture));
          }
        );
      });
    };

    // Load Earth textures with fallback
    const loadEarthTextures = async () => {
      const albedo = await loadTextureWithFallback('/earth/Albedo.jpg', '/earth/00_earthmap1k.jpg');
      const specular = await loadTextureWithFallback('/earth/Ocean.png', '/earth/00_earthmap1k.jpg');
      const bump = await loadTextureWithFallback('/earth/Bump.jpg', '/earth/01_earthbump1k.jpg');
      const lights = await loadTextureWithFallback('/earth/night_lights_modified.png', '/earth/03_earthlights1k.jpg');
      const clouds = await loadTextureWithFallback('/earth/Clouds.png', '/earth/04_earthcloudmap.jpg');

      return { albedo, specular, bump, lights, clouds };
    };

    loadEarthTextures().then(({ albedo, specular, bump, lights, clouds }) => {
      const geometry = new THREE.IcosahedronGeometry(2, detail);
      const material = new THREE.MeshPhongMaterial({
        map: albedo,
        specularMap: specular,
        bumpMap: bump,
        bumpScale: 4,
      });
      const earthMesh = new THREE.Mesh(geometry, material);
      earthGroup.add(earthMesh);

      const lightsMat = new THREE.MeshBasicMaterial({
        map: lights,
        blending: THREE.AdditiveBlending,
      });
      const lightsMesh = new THREE.Mesh(geometry, lightsMat);
      earthGroup.add(lightsMesh);

      const cloudsMat = new THREE.MeshStandardMaterial({
        map: clouds,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
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

      // Satellite orbits and other components remain the same
      const satelliteOrbitData = [];

      function createTextSprite(text) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        context.font = '60px Arial';
        const textMetrics = context.measureText(text);
        const textWidth = textMetrics.width;

        canvas.width = textWidth;
        canvas.height = 64;

        context.font = '48px Arial';
        context.fillStyle = 'white';

        context.fillText(text, 0, 38);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);

        const aspectRatio = canvas.width / canvas.height;
        sprite.scale.set(aspectRatio * 0.1, 0.1, 1);

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
        nameSprite.position.set(0, 0.05, 0);
        satelliteGroup.add(nameSprite);

        const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
        satelliteGroup.add(satelliteMesh);

        earthGroup.add(satelliteGroup);
        const satrec = satellite.twoline2satrec(tle[0], tle[1]);
        satelliteOrbitData.push({ group: satelliteGroup, satrec: satrec });
      }

      fetch('/data/TLE_Light.json')
        .then((response) => response.json())
        .then((data) => {
          Object.entries(data).forEach(([name, sat]) => {
            addSatellite(sat.tle, name, sat.color);
          });
          if (onLoad) onLoad();
        })
        .catch((error) => console.error('Error loading TLE data:', error));

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
        cloudsMesh.rotation.y += earthRotationSpeed * 1.3;
        glowMesh.rotation.y += earthRotationSpeed;

        const now = new Date();
        const gmst = satellite.gstime(now);

        satelliteOrbitData.forEach((satelliteData) => {
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
  }, [onLoad]);

  return (
    <div
      ref={canvasRef}
      className="w-screen h-screen absolute inset-0 flex justify-center items-center z-20 bg-black"
    >
      <div className="flex justify-center items-center text-white animate-pulse">
        {/* <canvas id="bg"></canvas> */}
      </div>
    </div>
  );
};

export default Simulation;
