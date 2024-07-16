import { useState } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import Simulation from '@/components/Simulation';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col justify-between p-9 md:p-16 overflow-hidden relative">
      {/* 3D Simulation */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center z-0">
        <Simulation 
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      </div>
      
      {/* Loader */}
      {!isLoaded && <Loader />}
        
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
