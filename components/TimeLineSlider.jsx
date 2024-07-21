import React, { useState } from "react";
import { Chrono } from "react-chrono";

const TimeLine = ({selectedId, setSelectedId}) => {

  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];
  const theme = {
    primary: '#000000', // Main color of the timeline
    secondary: '#FFFFFF', // Color for secondary elements
    cardBgColor: '#FFFFFF', // Card background color
    cardForeColor: '#FFFFFF', // Card text color
    titleColor: '#FFFFFF', // Title color
    titleColorActive: '#FFFFFF', // Title color when the item is active
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={150}
        onItemSelected={(event) => setSelectedId(event.id)}
        theme={theme}
      />
    </div>
  );
};

export default TimeLine;
