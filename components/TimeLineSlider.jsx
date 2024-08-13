import React, { useState } from 'react';
import { FaSatellite, FaRocket, FaRegStar } from 'react-icons/fa';
import previousProject from '@/src/previousProjects';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineData = [
    { id: 1, date: '2024-01-01', title: 'Launch Event', description: 'Our first satellite launch.', details: 'Details about the satellite launch.' },
    { id: 2, date: '2024-02-01', title: 'Orbit Established', description: 'Satellite entered orbit.', details: 'Details about the orbit.' },
    { id: 3, date: '2024-03-01', title: 'Mission Success', description: 'Mission accomplished successfully.', details: 'Details about the mission success.' },
    { id: 4, date: '2024-04-01', title: 'Data Transmission', description: 'First data received from space.', details: 'Details about the data transmission.' },
    { id: 5, date: '2024-01-01', title: 'Launch Event', description: 'Our first satellite launch.', details: 'Details about the satellite launch.' },
    { id: 6, date: '2024-02-01', title: 'Orbit Established', description: 'Satellite entered orbit.', details: 'Details about the orbit.' },
    { id: 7, date: '2024-03-01', title: 'Mission Success', description: 'Mission accomplished successfully.', details: 'Details about the mission success.' },
    { id: 8, date: '2024-04-01', title: 'Data Transmission', description: 'First data received from space.', details: 'Details about the data transmission.' },
    { id: 9, date: '2024-01-01', title: 'Launch Event', description: 'Our first satellite launch.', details: 'Details about the satellite launch.' },
    { id: 10, date: '2024-02-01', title: 'Orbit Established', description: 'Satellite entered orbit.', details: 'Details about the orbit.' },
  ];


  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        height: '30vh',
        padding: '20px',
        background: 'black',
        color: 'white',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          height: '2px',
          background: '#CCCCCC',
          zIndex: 0,
        }}
      ></div>
      <div 
        style={{
          display: 'flex',
          gap: '150px',
          padding: '20px',
          whiteSpace: 'nowrap',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          position: 'absolute',
          top: '10%',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {timelineData.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: activeEvent === item.id ? '#555' : '#CCCCCC',
              borderRadius:  '100%',
              padding: '15px',
              width: activeEvent === item.id ? '200px' : '70px',
              height: activeEvent === item.id ? '200px' : '70px',
              top : activeEvent === item.id ? '-12%' : '20%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
            }}
            onClick={() => handleEventClick(item.id)}
          >
            <div style={{ fontSize: '40px', color: '#B22222' }}>
              {item.id === 1 ? <FaRocket /> : item.id === 2 ? <FaSatellite /> : <FaSatellite />}
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <h2 style={{ fontSize: '16px' }}>{item.title}</h2>
              <p style={{ fontSize: '12px', color: '#ccc' }}>{item.date}</p>
              {activeEvent === item.id && (
                <div style={{ marginTop: '15px', fontSize: '14px' }}>
                  <p>{item.description}</p>
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;