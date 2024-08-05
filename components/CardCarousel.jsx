// File path: src/components/CardCarousel.js

import React from 'react';
import ExpandableCard from './ExpandableCard';

const CardCarousel = ({ cardsData }) => {
  return (
    <div style={styles.carouselContainer}>
      <div style={styles.carousel}>
        {cardsData.map((data) => (
          <div key={data.id} style={styles.cardWrapper}>
            <ExpandableCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    overflowX: 'hidden', // Hide overflow on the X axis
    width: '100%',
    padding: '0 20px',
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto', // Enable horizontal scrolling
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth', // Smooth scrolling
    padding: '10px 0',
  },
  cardWrapper: {
    minWidth: '300px', // Set a minimum width for each card
    margin: '0 10px', // Add margin between cards
    scrollSnapAlign: 'start',
  },
};

export default CardCarousel;
