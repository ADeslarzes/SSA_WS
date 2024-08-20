import React, { useState } from "react";
import { motion, useScroll, useAnimation, AnimatePresence } from 'framer-motion';
import { borderRadius } from "@mui/system";

const TestCardProjects = ({ items, selectedId, setSelectedId }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyle = {
    position: "relative",
    width: activeEvent === null ? "400px" : "500px",
    height: activeEvent === null ? "480px" : "600px",
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
    <div style={sliderStyle}>
      <div style={slideStyle}>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="p-4 text-black border-2 bg-white"
          style={{
            height: activeEvent === item.id ? '600px' : '480px',
            width: activeEvent === item.id ? '500px' : '600px',
            flex: '0 0 auto'  // Ensure the card does not shrink or grow
          }}
          initial={{ scale: 0.96, borderColor: 'transparent' }}
          whileHover={{ scale: 1, borderColor: '#FF0000' }}  // Expends and changes border color on hover
          onClick={() => handleEventClick(item.id)}
        >
          {/* Title */}
          <div className="text-black font-semibold text-xl mb-2">
            {item.title}
          </div>
          {/* Image and description */}
          <motion.div>
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-[200px] object-cover object-top rounded-md mb-2"
            />
            <motion.p
              className="text-black overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: activeEvent != item.id && 7 ,  // Limits the text to 7 lines
                overflow: 'hidden',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        </motion.div>
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

export default TestCardProjects;