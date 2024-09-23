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
      }, 2800); // 2.8 seconds delay

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
      <div className="w-full h-max flex justify-between items-center font-semibold">
        <SolidLogo />
      </div>

      {/* Navigation Menu */}
      <div className="w-full px-9 absolute top-9 md:top-16 right-9 z-20">
        <NavigationMenu />
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-9 right-9 md:bottom-16 md:right-16 z-20 bg-transparent text-white p-4 hidden md:block overflow-hidden" style={{ width: '30%', height: '20%' }}>
        <p className="text-l leading-tight" style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Ut fringilla mi a libero euismod, nec congue metus vestibulum. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur neque ut v
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Ut fringilla mi a libero euismod, nec congue metus vestibulum. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur neque ut v
        </p>
      </div>
    </div>
  );
}
