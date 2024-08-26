import React from 'react';

export default function SolidLogo() {
  const logoStyle = {
    position: 'absolute',
    top: '6',
    left: '0',
    padding: '10px', // Optional: add some padding
    maxWidth: '200px' // Adjust size as needed
  };

  return (
    <div style={logoStyle}>
      <img src={'/ssa_logo/SSA_LOGO_FULL.png'} alt="SSA Logo" />
    </div>
  );
}
