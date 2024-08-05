// File path: src/components/ExpandableCard.js

import React, { useState } from 'react';

const ExpandableCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader} onClick={toggleExpand}>
        <img src={data.imageSrc} alt={data.title} style={styles.cardImage} />
        <div style={styles.cardHeaderText}>
          <h2 style={styles.cardTitle}>{data.title}</h2>
          <h4 style={styles.cardSubtitle}>{data.subtitle}</h4>
        </div>
        <button style={styles.toggleButton}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {isExpanded && (
        <div style={styles.cardContent}>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Scope:</strong> {data.scope}</p>
          <p><strong>Tasks:</strong> {data.tasks}</p>
          <p><strong>Prerequisites:</strong> {data.prerequisites}</p>
          <p><strong>Constraints:</strong> {data.constraints}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '10px',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  cardImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  cardHeaderText: {
    flexGrow: 1,
  },
  cardTitle: {
    margin: 0,
  },
  cardSubtitle: {
    margin: 0,
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
  },
  cardContent: {
    padding: '10px',
    backgroundColor: '#fff',
  },
};

export default ExpandableCard;
