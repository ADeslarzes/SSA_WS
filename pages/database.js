import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import tleData from '/public/data/TLE_Light.json';
import {Button} from "@nextui-org/button";
import SatelliteItem from '@/components/Data';

const inter = Inter({ subsets: ['latin'] });

const getFilteredItems = (query, items) => {
  if (!query) {return items;}
  else return items.filter( item => item.name.includes(query) || item.tle1.includes(query) || item.tle2.includes(query))
}

export default function DataBase() {
  const [datas, setDatas] = useState(tleData);
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState(tleData);

 

  const transformedData = Object.keys(tleData).map(key => ({
    name: key,
    tle1: tleData[key].tle[0],
    tle2: tleData[key].tle[1],
    color: tleData[key].color,
  }));

  const filteredItems = getFilteredItems(query, transformedData);

  useEffect(() => {
    setDatas(tleData);
    setFilteredData(tleData);
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
        onChange={e => setQuery(e.target.value)}
        style={{
          width: '250px', 
          padding: '10px 15px', 
          borderRadius: '20px', 
          border: '2px solid #B22222',  
          outline: 'none', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          margin: '20px auto', 
          display: 'block',  
          fontSize: '16px', 
          color: '#333',  
          backgroundColor: '#f9f9f9' 
          }}/>
        <div className='overflow-y-auto p-10'>
          {filteredItems.map( (item) => <SatelliteItem key={item.name} satellite={item}/>)}
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