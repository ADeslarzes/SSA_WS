import React from 'react';

export default function Loader() {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center z-50 bg-black">
      <div className="w-[200px] animate-pulse">
        <img src="/ssa_logo/SSA_LOGO_FULL.png" alt="SSA_Logo" />
      </div>
    </div>
  );
}
