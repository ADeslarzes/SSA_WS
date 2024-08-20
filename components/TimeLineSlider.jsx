import React, { useState } from 'react';
import { FaSatellite, FaRocket, FaRegStar } from 'react-icons/fa';
import previousProject from '@/src/previousProjects';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineData = [
    { id: 1,  title: 'Event', description: 'Our first satellite launch.' , image: '/projects/satellite.avif'},
    { id: 2, title: 'Main project', description:'In this project....',  image: '/projects/cupola.png'},
    { id: 3, title: 'Side project', description:'In this project....',  image: '/projects/Station_Meteo.png'},
    { id: 4, title: 'Side project', description:'In this project....',  image: '/projects/satellite.avif'},
    { id: 5,  title: 'Event', description: 'Satellite entered orbit.', image: '/projects/satellite.avif'},
    { id: 6, title: 'Main project', description:'In this project....',  image: '/projects/satellite.avif'},
    { id: 7,  title: 'Event', description: 'Mission accomplished successfully.' , image: '/projects/satellite.avif'},
    { id: 8, title: 'Side project', description:'In this project....',  image: '/projects/satellite.avif'},
    { id: 9, title: 'Main project', description:'In this project....',  image: '/projects/satellite.avif'},
    { id: 10,  title: 'Event', description: 'First data received from space.' , image: '/projects/satellite.avif'},
    { id: 11, title: 'Main project', description:'In this project....',  image: '/projects/satellite.avif'},
    { id: 12, title: 'Side project', description:'In this project....',  image: '/projects/satellite.avif'},
  ];

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  const imageStyle = {borderRadius: '100%', 
                      position: 'relative',
                      padding: '2px',
                      width: '100px', 
                      height: '100px',
                      objectFit: 'cover'}

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        height: activeEvent === null ? '20vh' : '50vh',
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
          gap: '70px',
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
              background: activeEvent === item.id ? `url(${item.image}) no-repeat center/cover` : item.title === 'Event' ? '#CCCCCC' : item.title === 'Main project' ? 'red' : 'gray',
              borderRadius: '100%',
              padding: activeEvent ===item.id ? '70px': item.title === 'Event'? '15px' : item.title === 'Main project' ? '15px' : '10px',
              width: activeEvent === item.id ? '250px' : item.title ==='Event' ?' 70px' : item.title === 'Main project' ? '5px' : '1px',
              height: activeEvent === item.id ? '250px' : item.title ==='Event' ?' 70px' : item.title === 'Main project' ? '5px' : '1px',
              top : activeEvent === item.id ? '5%' : activeEvent === null ? (item.title ==='Event' ?' 9%' : item.title === 'Main project' ? '27%' : '32%') : (item.title ==='Event' ?'32%' : item.title === 'Main project' ? '39%' : '40%'),
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
            }}
            onClick={() => handleEventClick(item.id)}
          >
            <div style={{ fontSize: '40px', color: '#B22222', }}>
              {activeEvent != item.id &&  (item.title === 'Event' && <FaSatellite />)}
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              {/*<h2 style={{ fontSize: '16px' }}>{item.title}</h2>
              <p style={{ fontSize: '12px', color: '#ccc' }}>{item.date}</p>*/}
              {activeEvent === item.id && (
                <div style={{ marginTop: '15px', fontSize: '14px' }}>
                  <p>{item.description}</p>
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