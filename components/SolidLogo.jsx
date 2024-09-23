import React, { useState, useEffect } from 'react';

export default function SolidLogo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handler right away so the state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '10px',
    maxWidth: '200px',
    display: isMobile ? 'none' : 'block', // Hide logo on mobile
  };

  return (
    <div style={logoStyle}>
      <img src={'/ssa_logo/SSA_LOGO_FULL.png'} alt="SSA Logo" />
    </div>
  );
}
