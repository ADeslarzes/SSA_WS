import React, { useEffect } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Torus() {
  useEffect(() => {
    if(!window) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(0);
    renderer.render(scene, camera);
    
    const geometry = new THREE.TorusKnotGeometry( 8, 2, 100, 100); 
    const material = new THREE.MeshStandardMaterial({ color: 0xFF0000, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    
    scene.add(torus);
    
    const pointLight = new THREE.PointLight(0xffffff, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      torus.rotation.x += 0.0032;
      torus.rotation.y += 0.0005;
      torus.rotation.z += 0.002;
    
      controls.update();
    
      renderer.render(scene, camera);
    }
    
    animate();
  }, [])

  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center z-20 bg-black">
      <div className="flex justify-center items-center">
        <canvas id="bg"></canvas>
      </div>
    </div>
  );
}
