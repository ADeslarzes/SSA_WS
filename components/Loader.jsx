import React from 'react';

export default function Loader() {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center z-20 bg-black">
      <div className="w-full lg:max-w-[1600px] px-4 md:px-12">
        <div className="text-white">
          <img src="/SSA_LOGO_FULL.png" alt="SSA_Logo" />
        </div>
      </div>
    </div>
  );
}