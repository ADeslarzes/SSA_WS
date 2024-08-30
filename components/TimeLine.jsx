import React, { useState } from "react";
import timeline from "@/src/timeline";

const TimeLine = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dates = [];

  timeline.map((item) => {
    const startMonth = item.start.substring(3, 5);
    const endMonth = item.end.substring(3, 5);
    const startYear = item.start.substring(6);
    const endYear = item.end.substring(6);
    const period = Number(endMonth) - Number(startMonth) + 12 * (Number(endYear) - Number(startYear));
    const startMonthIndex = Number(startMonth) - 1; // Months are 0-indexed
    const endMonthIndex = Number(endMonth) - 1;

    const newDate = {
      id: Number(startYear),
      startYear: Number(startYear),
      startMonth: Number(startMonth),
      endYear: Number(endYear),
      endMonth: Number(endMonth),
      period: period,
      startMonthIndex: startMonthIndex,
      endMonthIndex: endMonthIndex,
      event: item.title // Assuming each item has an `event` field
    };
    dates.push(newDate);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? years.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === years.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyle = {
    position: "relative",
    background: 'black',
    width: "1250px",
    height: "600px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "8px",
    border: "2px solid #000"
  };

  const slideContainerStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(${-currentIndex * 1250}px)` // Move based on container width
  };

  const slideStyle = {
    minWidth: "1250px", // Each slide takes the full width of the container
    height: "600px",
    display: "flex",
    flexDirection: "column", // Arrange children vertically
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  };

  const yearStyle = {
    background: 'white',
    color: 'red',
    width: '200px',
    height: '50px',
    fontSize: '30px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20px' // Adjust this value as needed
  };

  const monthsContainerStyle = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'center',
    gap: '5px', // Space between months
    position: 'absolute',
    top: '80px', // Move closer to the year
  };

  const monthStyle = {
    background: 'black',
    margin: '0 20px',
    color: 'white',
    width: '50px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const eventStyle = {
    background: 'gray',
    color: 'white',
    width: '150px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
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
    <div style={sliderStyle}>
      <div style={slideContainerStyle}>
        {years.map((year, index) => (
          <div key={index} style={slideStyle}>
            <div style={yearStyle}>
              {year}
            </div>
            <div style={monthsContainerStyle}>
              {months.map((month, monthIndex) => (
                <div key={monthIndex} style={monthStyle}>
                  {month}
                </div>
              ))}
            </div>
            <div>
              {dates
                .filter(date => date.startYear === year)
                .map((date, eventIndex) => (
                  <div key={eventIndex} 
                       className='rounded-xl'
                       style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'gray',
                        padding: '20px',
                        margin: '50px 0',
                        width: activeEvent === eventIndex ? '300px' : (date.startYear === date.endYear ? `${date.period * 10 }%` : `${date.period * 5 + 60 }%`), //53
                        height: activeEvent === eventIndex ? '150px' :  '1px',
                        left: `${date.startMonth * 90}px`,
                        top : `${(eventIndex + 1) * 100}px`, //50
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'absolute',
                        zIndex: 1,
                      }}
                      onClick={() => handleEventClick(eventIndex)}>

                    {date.event}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div style={leftArrowStyle} onClick={prevSlide}>
        &#10094;
      </div>
      <div style={rightArrowStyle} onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default TimeLine;