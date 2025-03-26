import React, { useState } from 'react';

const ProjectCard = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    projectCard: {
      position: 'relative',
      height: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: isHovered ? 'translateY(-5px)' : 'none',
      border: '2px solid #B00000', // Added red outline
      boxSizing: 'border-box' // Ensures border doesn't affect dimensions
    },
    cardFace: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      transition: 'transform 0.6s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      boxSizing: 'border-box'
    },
    cardFront: {
      backgroundColor: '#000',
      color: '#fff',
      transform: isHovered ? 'rotateY(-180deg)' : 'rotateY(0deg)',
      border: '2px solid #B00000', // Matching outline on front face
    },
    cardBack: {
      backgroundColor: '#ff0000',
      color: '#fff',
      transform: isHovered ? 'rotateY(0deg)' : 'rotateY(180deg)',
      border: '2px solid #000', // Black outline on back face
    },
    cardImage: {
      width: '80%',
      height: '60%',
      objectFit: 'cover',
      borderRadius: '5px',
      marginBottom: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.2)' // Subtle border on images
    },
    cardTitle: {
      fontSize: '1.5rem',
      margin: '0.5rem 0',
      textAlign: 'center',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    cardDescription: {
      fontSize: '1rem',
      textAlign: 'center',
      marginTop: '0.5rem',
      padding: '0 1rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div 
      style={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.cardFace, ...styles.cardFront}}>
        <img 
          src={image || 'https://via.placeholder.com/400x300'} 
          alt={name || 'Project image'} 
          style={styles.cardImage} 
        />
        <h3 style={styles.cardTitle}>{name || 'Untitled Project'}</h3>
      </div>
      <div style={{...styles.cardFace, ...styles.cardBack}}>
        <img 
          src={image || 'https://via.placeholder.com/400x300'} 
          alt={name || 'Project image'} 
          style={styles.cardImage} 
        />
        <h3 style={styles.cardTitle}>{name || 'Untitled Project'}</h3>
        <p style={styles.cardDescription}>{description || 'No description available'}</p>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "Website Redesign",
    image: "https://via.placeholder.com/400x300/ff0000/ffffff?text=Project+1",
    description: "Complete redesign of company website with modern UI/UX principles."
  },
  {
    name: "E-commerce Platform",
    image: "https://via.placeholder.com/400x300/000000/ffffff?text=Project+2",
    description: "Built a custom e-commerce solution with React and Node.js."
  },
  {
    name: "Mobile App",
    image: "https://via.placeholder.com/400x300/ffffff/000000?text=Project+3",
    description: "Cross-platform mobile application for iOS and Android."
  }
];

const CardProjects = ({  }) => {
  if (!Array.isArray(projects)) {
    console.error("Projects is not an array:", projects);
    return (
      <div style={{ 
        color: 'red', 
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.2rem',
        border: '1px solid red',
        borderRadius: '5px',
        margin: '2rem'
      }}>
        Error: Projects data is not in the correct format
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div style={{ 
        color: '#666', 
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.2rem',
        border: '1px dashed #ccc',
        borderRadius: '5px',
        margin: '2rem'
      }}>
        No projects to display
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem'
    }}>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          name={project?.name}
          image={project?.image}
          description={project?.description}
        />
      ))}
    </div>
  );
};

export default CardProjects;