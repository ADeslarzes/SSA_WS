import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '@mui/material/Button';

const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      style={{
        width: '100%',
        margin: '20px auto',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid white',
        height: isExpanded ? 'auto' : '400px',
        transition: 'height 0.3s ease',
      }}
    >
      <Card.Img
        variant="top"
        src="./images/satellite.png"
        style={{height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="text-center text-white" style={{ overflowY: isExpanded ? 'visible' : 'auto', maxHeight: isExpanded ? 'none' : 'calc(100% - 200px)' }}>
        <Card.Title className="font-bold text-xl underline">Card Title</Card.Title>
        <Card.Text className='text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
        </Card.Text>
        <Button variant="outlined" className="text-white" onClick={toggleExpand}>
          {isExpanded ? 'Collapse' : 'More'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExpandableCard;
