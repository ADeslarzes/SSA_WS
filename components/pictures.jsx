import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "/projects/satellite.avif",
    "/projects/satellite.avif",
    "/projects/satellite.avif",
    "/projects/satellite.avif",
    "/projects/satellite.avif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover"
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
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} style={imageStyle} />
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

export default ImageSlider;