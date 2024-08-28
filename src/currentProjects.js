// src/projectItems.js

const currentProject = [
  { 
    id: '1', 
    title: 'DESIGN OF A CUPOLA', 
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/cupola.png', 
    recommendation: 'This project is suitable for students with a background in building facilities and 3D modeling',
    description: 'In this project, a student from GM and another from GC will team up to design a new cupola. \
                  They’ll take the existing prototype, scale it up, and fix any issues. This new cupola will run \
                  completely on its own energy and in a remote location where quick human help isn’t an option. By \
                  the end of the semester, the design should be done, and then the actual building of the cupola will \
                  start. If the students want, they can also participate to the construction.',
    tasks: ['Taking note of the report done for the prototype and finding solutions for any improvements that need to be made',
            'Designing the new cupola considering the report and the different constraints',
            'Building the new cupola (if desired).'],
    prerequisites: ['Skills in building facilities',
                    'Familiarity with a 3D design program'],
    constraints: ['Self-sufficient dome',
                  'Remote location']
  },
  { 
    id: '2', 
    title: 'INTEGRATING WEATHER FORECASTS TO OPTIMIZE TELESCOPE USAGE', 
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/Station_Meteo.png', 
    recommendation: 'This project is suitable for students with an interest in weather forecasting and data management.',
    description: 'The goal of this project is to achieve highly accurate weather predictions to maximize observation time. \
                  This requires getting a good understanding of weather forecasting and proficient management of data from \
                  different weather stations. Thorough execution of this project is essential to prevent damage to the expensive \
                  tools and ensure the reliability and safety of observations.',
    tasks: ['Gathering and storing data from the local weather station',
            'Develop a system to assess the current cloud cover using a sky-facing camera and/or the Météo Suisse data',
            'Creation of a method that allow or not observations. It would take as input the Météo Suisse data, camera informations, the local weather station data, ... ',
            'Build an interface between the local weather station and the telescope control software.'],
    prerequisites: ['A good understanding of weather forecasting',
                    'Skills in data management and analysis',
                    'Proficiency in handling and interpreting weather station data.'],
    constraints: ['Self-sufficient dome',
                  'Remote location',
                  'High accuracy required']
  },
  { 
    id: '3', 
    title: 'ENERGY MANAGEMENT FOR AN AUTONOMOUS OBSERVATION STATION', 
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/solar_panel.jpg', 
    recommendation: 'This project is suitable for students with an interest in energy management and solar technologies.',
    description: 'The project focuses on establishing an energy-efficient solution for a second protective cupola, ensuring self-sufficiency in power supply. \
                  Situated within a natural reserve, our remote observation station will operate off-grid, necessitating reliance on powerful battery systems. \
                  The primary objective involves calculating the energy requirements of our setup and developing initial strategies, including the potential integration of solar panels for daytime battery recharging. \
                  This project aims to optimize energy management while minimizing ecological footprint, ensuring continuous and reliable observation operations.',
    tasks: ['Assess the energy requirements of the remote observation station, considering all operational components.',
            'Develop preliminary energy management strategies, including the integration of solar panels for daytime battery recharge.',
            'Design the actual system architecture, selecting appropriate components such as batteries, solar panels, and energy management systems.'],
    prerequisites: ['Familiarity with energy consumption principles and calculations',
                    'Ability to evaluate and implement renewable energy solutions, such as solar panels.'],
    constraints: ['Self-sufficient dome',
                  'Remote location.']
  },
  { 
    id: '4', 
    title: 'MACHINE LEARNING TO EXTRACT TLEs FROM SATELLITE IMAGES', 
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/machine_learning.jpg', 
    recommendation: 'This project is suitable for students with background in machine learning and image processing.',
    description: 'In this project, a student will develop or improve a machine learning model to extract Two-Line Elements (TLEs) from satellite images. \
                  The model will be trained on a dataset of satellite images from our telescop or on synthesis images.',
    tasks: ['Knowing if it is better to improve an existing model or to restart from scratch.',
            'Develop the model in order to extract the 2 ends of the satellite track from images',
            'Train the model from our dataset',
            'Compute the TLEs from the extracted data.'],
    prerequisites: ['Skills in machine learning'],
    constraints: ['Small dataset of real images or synthesis images.']
  },
  { 
    id: '5', 
    title: 'LIGHT CURVE MEASUREMENTS OF SATELLITE TRACKS', 
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/satellite.jpg', 
    recommendation: 'This project is suitable for students with background in image processing.',
    description: 'We aim to measure precisely the luminosity of the satellite tracks, and doing so automatically for each measurement. \
                  To do that, you will first find a way to calibrate the light flux measurement using the telescope, and then measure the luminosity. \
                  We can then extract light curves, i.e., the variation of luminosity of the object in time. In the end, the procedure should be applied automatically to each new satellite detected. \
                  This measurement will then be extrapolated to standard values, comparable to those obtained in references. Ideally, we would like to perform such measurements in multiple colour bands.',
    tasks: ['Calibrate the light flux measurement using the telescope.',
            'Measure the luminosity of the satellite tracks.',
            'Extract light curves from the measurements.',
            'Perform the measurements in multiple colour bands.'],
    prerequisites: ['Skills in image processing'],
    constraints: ['Small dataset of real images or synthesis images.']
  },
  { 
    id: '6', 
    title: 'TELECOMMUNICATIONS FOR REMOTE OBSERVATION STATION',  
    availabl: 'Yes', 
    date: '09.09.2024 to 20.12.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    lab: 'To be determined',
    imageSrc: '/projects/telecommunications.jpg', 
    recommendation: 'This project is suitable for students with background in telecommunications.',
    description: 'Our telescope will soon be operated remotely. Whilst most of its tasks should fully automated by then, \
                  we will need to give it new tasks, as well as retrieve the data it obtained. Our current choice of location does not provide \
                  standard internet connection, the only options being 4G connection with a SIM card, or Starlink. Furthermore, the energy supply \
                  can be unreliable, meaning that the telecommunications must be interruptible. This project consists of estimating the bandwidth \
                  necessary, studying the possible solutions, and implementing the optimal strategy.',
    tasks: ['Estimate the bandwidth necessary for the telescope',
            'Study the possible solutions for the telecommunications',
            'Implement the optimal strategy'],
    prerequisites: ['Skills in telecommunications'],
    constraints: ['Remote location',
                  'Unreliable energy supply',
                  'No standard internet connection.']
  },
];
  
  export default currentProject;
  