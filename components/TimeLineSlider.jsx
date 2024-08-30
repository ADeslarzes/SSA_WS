import React, { useState } from 'react';
import { FaSatellite, FaRocket, FaRegStar } from 'react-icons/fa';
import previousProject from '@/src/previousProjects';
import timeline from '@/src/timeline';

const Timeline = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyle = {
    position: "relative",
    width: "600px",
    height: "400px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "8px", // Optional: for rounded corners
    border: "2px solid #000" // Optional: to visualize the box
  };

  const slideStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(${-currentIndex * 100}%)`
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    cursor: "pointer"
  };

  const leftArrowStyle = {
    ...arrowStyle,
    left: "10px"
  };

  const rightArrowStyle = {
    ...arrowStyle,
    right: "10px"
  };


  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        height:'50vh',
        padding: '20px',
        background: 'black',
        color: 'white',
        position: 'relative'
      }}
    >
<div
      style={{
        display: 'flex',
        overflowX: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'black',
        color: 'red',
        padding: '10px',
        width: '100%', // Full width container
        overflowX: 'auto', // Enable horizontal scrollbar
        whiteSpace: 'nowrap', // Prevent line breaks
      }}
    >
      {
        (() => {
          const currentYear = new Date().getFullYear();
          const yearDivs = [];
          
          for (let index = 2020; index <= currentYear; index++) {
            yearDivs.push(
              <div
                key={index}
                style={{
                  background: 'black',
                  color: 'red',
                  width: '200px',
                  height: '100px',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '1000px', // Add space between divs
                }}
              >
                {index}
              </div>
            );
          }

          return yearDivs;
        })()
      }
    </div>
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
        {timeline.map((item) => (
          <div
            key={item.id}
            className='rounded-1/4xl'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'gray',
              padding: activeEvent ===item.id ? '70px': '10px',
              width: activeEvent === item.id ? '500px' : '100px',
              height: activeEvent === item.id ? '250px' :  '1px',
              top : activeEvent === item.id ? `${5 * item.id}%` : `${20 * item.id}%`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
            }}
            onClick={() => handleEventClick(item.id)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;