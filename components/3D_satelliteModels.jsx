import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingModel({ path, scale }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed
    //   modelRef.current.rotation.x += 0.01;
    //   modelRef.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

function SatelliteModels() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  
  // Array with model paths and their corresponding scales
  const models = [
    { path: "/satellites/Aura.glb", scale: [0.005, 0.005, 0.005] }, 
    { path: "/satellites/Agena.glb", scale: [0.09, 0.09, 0.09] }, 
    { path: "/satellites/Gemini.glb", scale: [0.2, 0.2, 0.2] }, 
    { path: "/satellites/Photometer.glb", scale: [0.07, 0.07, 0.07] }, 
    { path: "/satellites/CloudSat.glb", scale: [0.9, 0.9, 0.9] }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [models.length]);

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} />
      <RotatingModel 
        path={models[currentModelIndex].path} 
        scale={models[currentModelIndex].scale} 
      />
      <OrbitControls />
    </Canvas>
  );
}

export default SatelliteModels;
