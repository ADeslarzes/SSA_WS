import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      style={{
        width: '30%',
        margin: '20px auto',
        borderRadius: '25px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '5px solid white',
        height: isExpanded ? 'auto' : '400px',
        transition: 'height 0.3s ease',
      }}
    >
      <Card.Img
        variant="top"
        src="./images/satellite.png"
        style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="text-center" style={{ overflowY: isExpanded ? 'visible' : 'auto', maxHeight: isExpanded ? 'none' : 'calc(100% - 200px)' }}>
        <Card.Title className="font-bold underline">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </Card.Text>
        <Button variant="outlined" className="mx-auto d-block" onClick={toggleExpand}>
          {isExpanded ? 'Collapse' : 'More'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExpandableCard;
