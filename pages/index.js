import { AnimatePresence, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import WireframeLogo from '@/components/WireframeLogo';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import Torus from '@/components/Torus';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube 4');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    if (obj) {
      // Adjust position
      obj.position.x += 100;
      obj.position.y -= 100;
      obj.position.z -= 1000;
      
      // Rotate the object
      // Assuming you want to rotate by a certain amount in radians
      
  }

  }

  return (
    <div className="w-screen h-screen flex flex-col justify-between p-9 md:p-16 overflow-none bg-black">
      {/* Spline Scene */}
      <div className="absolute -z-10 inset-0 w-full h-full object-cover">
        <Spline
          scene="https://prod.spline.design/edqNzpCtOye1ESxo/scene.splinecode"
          onLoad={(spline) => {
            onLoad(spline)
            setIsLoaded(true);
          }}
        />
      </div>

      {/* Loader */}
      {!isLoaded && <Loader />}

      {/* Top Nav bar */}
      <div className="w-full h-max flex justify-between items-center font-semibold">
        <SolidLogo/>
        {/* <div className="rounded-lg w-24 h-11 p-4 border-black text-black border-2 flex justify-center items-center">
          Login
        </div> */}
      </div>

      {/* Navigation Menu */}
      <div className="w-full px-9 absolute top-9 md:top-16 right-9">
        <NavigationMenu />
      </div>
    </div>
  );
}
