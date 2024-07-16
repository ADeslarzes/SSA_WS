import { useState } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import Data from '@/components/Data';
import tleData from '/public/data/TLE_Heavy.json';
import {Button} from "@nextui-org/button";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="max-w-[1000px] max-h-[500px] w-full h-full flex flex-col justify-between p-9 md:p-16 overflow-hidden relative bg-black shadow-lg rounded-lg">
        {/* 3D Simulation */}
        <div className="relative w-full h-full flex justify-center items-center z-0">
          <div className="overflow-y-auto w-full h-full bg-black p-4">
            <Data 
              tleData={tleData}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
        <Button color="white" variant="bordered" className="overflow-y-auto w-full h-full bg-white p-4">
          Bordered
        </Button>  
        {/* Search Query */}
        {/* <div className="max-w-[400px] items-center ">
          <input
            type="text"
            placeholder="Search by satellite name or TLE ..."
            // value={searchQuery}
            // onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border border-red rounded"
          />
        </div> */}
      </div>
      <div>
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
    </div>
  );
}