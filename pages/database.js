import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import tleData from '/public/data/TLE_Light.json';
import data_test from '@/public/data/data_test';
import Data from '@/components/Data';
import {Button} from "@nextui-org/button";

const inter = Inter({ subsets: ['latin'] });

const getFilteredItems = (query, items) => {
  if (!query) {return items;}
  else return items.filter( item => item.name.includes(query) || item.tle1.includes(query) || item.tle2.includes(query))
}

export default function DataBase() {
  const [datas, setDatas] = useState(data_test);
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState(data_test);

 

  const transformedData = Object.keys(tleData).map(key => ({
    name: key,
    tle1: tleData[key].tle[0],
    tle2: tleData[key].tle[1],
    color: tleData[key].color,
  }));

  const filteredItems = getFilteredItems(query, transformedData);

  useEffect(() => {
    setDatas(data_test);
    setFilteredData(data_test);
    setIsLoaded(true);
  }, []);

  // handles the download
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(tleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TLE_Light.json';
    a.click();
    URL.revokeObjectURL(url);
  };


  return(
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="max-w-[1000px] max-h-[500px] w-full h-full flex flex-col justify-between p-9 md:p-16 overflow-hidden relative bg-black shadow-lg rounded-lg">
        {/* Download Button */}
        <Button
          color="white"
          className="absolute cursor-pointer z-200 top-50 right-0 bg-transparent p-0 m-0 transform hover:scale-90  transition-transform"
          onClick={handleDownload}
        >
          <img src="/others/button_download.svg" alt="Download" className="w-20 h-20" />
        </Button>
        <input 
        type="text" 
        placeholder="Search the name or the TLE..." 
        onChange={e =>(setQuery(e.target.value))}
        className="search">

        </input>
        <div className='overflow-y-auto p-10'>
        <div className="text-[red] text-2xl flex items-center justify-center text-center flex-col overflow-y-auto max-w-[1000px] max-h-[1000px] bg-black">
          {filteredItems.map( (item) => <h1>{item.name}</h1>)}
        </div>
        </div>
        
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
  )
}