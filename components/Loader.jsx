import React from 'react';

export default function Loader() {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center z-20 bg-black">
      <div className="flex justify-center items-center text-white animate-pulse">
        <img src="/images/fusee.svg" alt="fusee Logo" className="w-48 h-48" /> {/* Adjust className for styling */}
      </div>
    </div>
  );
}
