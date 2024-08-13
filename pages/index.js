import { useState } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import Simulation from '@/components/Simulation';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import EPFL_3D from '@/components/EPFL_3D';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (initialLoad) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [initialLoad]);

  return (
    <div className="w-screen h-screen flex flex-col justify-between p-9 md:p-16 overflow-hidden relative">
      {/* 3D Simulation */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center z-0">
        <Simulation 
          onLoad={() => {
            setInitialLoad(true);
          }}
        />
      </div>
      
      {/* Loader */}
      {!isLoaded && <EPFL_3D modelPath="/ssa_logo/EPFL.obj" />}
        
      {/* Logo */}
      <div className="w-full h-max flex justify-between items-center font-semibold z-20">
        <SolidLogo />
      </div>

      {/* Navigation Menu */}
      <div className="w-full px-9 absolute top-9 md:top-16 right-9 z-20">
        <NavigationMenu />
      </div>
    </div>
  );
}
