// src/components/EPFL_3D.js
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';

const Model = ({ path }) => {
  // Use OBJLoader to load the 3D model
  const obj = useLoader(OBJLoader, path);
  const ref = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01; // Adjust the speed of rotation here
    }
  });

  return <primitive object={obj} ref={ref} />;
};

const EPFL_3D = ({ modelPath }) => {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center z-50 bg-black">
      <Canvas className="animate-pulse">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model path={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default EPFL_3D;
