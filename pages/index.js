import { AnimatePresence, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import WireframeLogo from '@/components/WireframeLogo';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col justify-between p-9 md:p-16 overflow-none">
      {/* Spline Scene */}
      <div className="absolute -z-10 inset-0 w-full h-full object-cover">
        <Spline
          scene="https://prod.spline.design/f-sU2J6gyUlSen0s/scene.splinecode"
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      </div>

      {/* Loader */}
      {!isLoaded && <Loader />}

      {/* Top Nav bar */}
      <div className="w-full h-max flex justify-between items-center font-semibold">
        <SolidLogo fillColor={'#000'} />
        {/* <div className="rounded-lg w-24 h-11 p-4 border-black text-black border-2 flex justify-center items-center">
          Login
        </div> */}
      </div>

      {/* Navigation Menu */}
      <div className="w-full px-9 absolute bottom-9 md:bottom-16 left-1/2 -translate-x-1/2">
        <NavigationMenu />
      </div>
    </div>
  );
}
