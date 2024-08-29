import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingModel({ path, scale }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x += 0.01;
      modelRef.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

function SatelliteModels() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isScreenWide, setIsScreenWide] = useState(false);

  const models = [
    { path: "/satellites/Gateway core.glb", scale: [0.1, 0.1, 0.1] }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 10000);

    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 600);
    };

    // Check if window is available before setting up the event listener
    if (typeof window !== "undefined") {
      setIsScreenWide(window.innerWidth > 600);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearInterval(interval);

      // Clean up the event listener if window is available
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [models.length]);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Conditionally render the text overlay based on screen width */}
      {isScreenWide && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'gray',
          padding: '10px',
          borderRadius: '5px',
          width: '400px',
          textAlign: 'left',
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          zIndex: 1,
        }}>
          Built with international and industry partners, Gateway will be humanity's first space station around the Moon. 
          It will support a new era of lunar exploration and deep space discovery as part of NASA's Artemis campaign to 
          establish a lasting presence on the Moon and pave the way for the first crewed mission to Mars.
        </div>
      )}

      {/* 3D Model Canvas */}
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        {/* Existing lights */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
        {/* Added lights */}
        <pointLight position={[0, 10, 0]} intensity={1} />
        <spotLight position={[5, 15, 10]} angle={0.3} penumbra={0.5} intensity={1} castShadow />
      
        {/* Model and Controls */}
        <RotatingModel 
          path={models[currentModelIndex].path} 
          scale={models[currentModelIndex].scale} 
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default SatelliteModels;
