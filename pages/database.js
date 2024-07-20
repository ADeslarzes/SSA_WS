import { useState, useEffect } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(tleData);

  // Transform tleData into an array of objects
  useEffect(() => {
    const transformedData = Object.keys(tleData).map(key => ({
      name: key,
      tle1: tleData[key].tle[0],
      tle2: tleData[key].tle[1],
      color: tleData[key].color,
    }));
    setFilteredData(transformedData);
    setIsLoaded(true); // Set as loaded after transforming data
  }, []);
  
  // Handler to download TLE data
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(tleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TLE_Heavy.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter data based on search query
  useEffect(() => {
    console.log(tleData);
    if (searchQuery.trim() === '') {
      setFilteredData(tleData);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = tleData.filter(
        item =>
          item.name.toLowerCase().includes(lowerCaseQuery) ||
          item.tle1.toLowerCase().includes(lowerCaseQuery) ||
          item.tle2.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="max-w-[1000px] max-h-[500px] w-full h-full flex flex-col justify-between p-9 md:p-16 overflow-hidden relative bg-black shadow-lg rounded-lg">
        {/* Download Button */}
        <Button
          color="white"
          className="absolute cursor-pointer z-10 top-15 right-10 bg-transparent p-0 m-0 transform hover:scale-90 transition-transform"
          onClick={handleDownload}
        >
          <img src="/others/button_download.svg" alt="Download" className="w-12 h-12" />
        </Button>
        {/* TLEs */}
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="overflow-y-auto w-full h-full bg-black p-4">
            <Data 
              tleData={filteredData}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
        {/* Search Query */}
        {/* <div className="max-w-[400px] items-center ">
          <input
            type="text"
            placeholder="Search by satellite name or TLE ..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border-2 border-red rounded"
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
