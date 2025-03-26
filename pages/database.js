// pages/DataBase.jsx
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Loader from '@/components/Loader';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import tleData from '/public/data/TLE_Light.json';
import { Button } from "@nextui-org/button";
import SatelliteItem from '@/components/Data';

const inter = Inter({ subsets: ['latin'] });

const getFilteredItems = (query, items) => {
  if (!query) return items;
  const q = query.toLowerCase();
  return items.filter(item => 
    item.name.toLowerCase().includes(q) || 
    item.tle1.toLowerCase().includes(q) || 
    item.tle2.toLowerCase().includes(q)
  );
};

export default function DataBase() {
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const transformedData = Object.keys(tleData).map(key => ({
    name: key,
    tle1: tleData[key].tle[0],
    tle2: tleData[key].tle[1],
    color: tleData[key].color,
  }));

  const filteredItems = getFilteredItems(query, transformedData);

  useEffect(() => {
    setFilteredData(transformedData);
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(tleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TLE_Light.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-black p-4 md:p-8">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <SolidLogo />
        <NavigationMenu />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        {/* Search and Download */}
        <div className="p-6 bg-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search by name or TLE..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full md:w-96 px-4 py-2 rounded-full border-2 border-burgundy bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-burgundy"
          />
          <Button
            onClick={handleDownload}
            className="bg-burgundy hover:bg-burgundy-dark text-white font-medium py-2 px-6 rounded-full transition-all"
          >
            Download JSON
          </Button>
        </div>

        {/* Data List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {!isLoaded ? (
            <div className="flex justify-center items-center h-40">
              <Loader />
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              No satellites found matching your search
            </div>
          ) : (
            filteredItems.map((item) => (
              <SatelliteItem key={item.name} satellite={item} />
            ))
          )}
        </div>
      </div>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #B22222;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}