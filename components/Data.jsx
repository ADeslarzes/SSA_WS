// components/SatelliteItem.jsx
import React from 'react';

const satelliteItemStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #B22222',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(178, 34, 34, 0.3)',
  backgroundColor: '#1a1a1a',
  margin: '15px auto',
  maxWidth: '800px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(178, 34, 34, 0.4)'
  }
};

const imageStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRight: '2px solid #B22222',
  backgroundColor: '#000'
};

const detailsStyle = {
  padding: '15px 20px',
  flex: '1',
  color: '#e0e0e0'
};

const nameStyle = {
  margin: '0 0 10px',
  fontSize: '1.3rem',
  color: '#fff',
  fontWeight: '600',
  letterSpacing: '0.5px'
};

const tleStyle = {
  margin: '8px 0',
  fontSize: '0.85rem',
  color: '#aaa',
  fontFamily: 'monospace',
  wordBreak: 'break-all'
};

const labelStyle = {
  color: '#B22222',
  fontWeight: '600',
  marginRight: '5px'
};

const SatelliteItem = ({ satellite }) => (
  <div style={satelliteItemStyle}>
    <img 
      src={'/projects/satellite.avif'} 
      alt={satellite.name} 
      style={imageStyle} 
      onError={(e) => {
        e.target.onerror = null; 
        e.target.src = '/projects/satellite-fallback.png'
      }}
    />
    <div style={detailsStyle}>
      <h3 style={nameStyle}>{satellite.name}</h3>
      <div style={tleStyle}>
        <span style={labelStyle}>TLE1:</span> 
        {satellite.tle1}
      </div>
      <div style={tleStyle}>
        <span style={labelStyle}>TLE2:</span> 
        {satellite.tle2}
      </div>
    </div>
  </div>
);

export default SatelliteItem;