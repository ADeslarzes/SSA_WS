import React from 'react';
import data_test from '@/public/data/data_test';


const satelliteItemStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  marginBottom: '20px',
  maxWidth: '800px',
  margin: '0 auto'
};

const imageStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover'
};

const detailsStyle = {
  padding: '20px',
  flex: '1'
};

const nameStyle = {
  margin: '0 0 10px',
  fontSize: '1.5rem',
  color: '#333'
};

const paragraphStyle = {
  margin: '5px 0',
  fontSize: '1rem',
  color: '#666'
};

const strongStyle = {
  color: '#333'
};

const SatelliteItem = ({ satellite }) => (
  <div style={satelliteItemStyle}>
    <img src={'/projects/satellite.avif'} alt={satellite.id} style={imageStyle} />
    <div style={detailsStyle}>
      <h3 style={nameStyle}>{satellite.id}</h3>
      <p style={paragraphStyle}><strong style={strongStyle}>TLE1:</strong> {satellite.tle1}</p>
      <p style={paragraphStyle}><strong style={strongStyle}>TLE2:</strong> {satellite.tle2}</p>
    </div>
  </div>
);

const SatellitesList = () => (
  <div>
    {data_test.map((item) => (
      <SatelliteItem key={item.id} satellite={item} />
    ))}
  </div>
);

export default SatellitesList;