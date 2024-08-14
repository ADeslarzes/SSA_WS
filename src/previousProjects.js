// src/projectItems.js

const previousProjects = [
  { 
    id: '1', 
    title: 'DESIGN OF A CUPOLA', 
    availabl: 'Yes', 
    date: '09.09.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    imageSrc: '/projects/cupola.png', 
    recommendation: 'This project is suitable for students with a background in building facilities and 3D modeling',
    description: 'In this project, a student from GM and another from GC will team up to design a new cupola. \
                  They’ll take the existing prototype, scale it up, and fix any issues. This new cupola will run \
                  completely on its own energy and in a remote location where quick human help isn’t an option. By \
                  the end of the semester, the design should be done, and then the actual building of the cupola will \
                  start. If the students want, they can also participate to the construction',
    tasks: 'Taking note of the report done for the prototype and finding solutions for any improvements that need to be made. \
            Designing the new cupola considering the report and the different constraints. \
            Building the new cupola (if desired).',
    prerequisites: 'Skills in building facilities\
                    Familiarity with a 3D design program',
    constraints: 'Self-sufficient dome.\
                  Remote location.'
  },
  { 
    id: '2', 
    title: 'INTEGRATING WEATHER FORECASTS TO OPTIMIZE TELESCOPE USAGE', 
    availabl: 'Yes', 
    date: '09.09.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    imageSrc: '/projects/Station_Meteo.png', 
    recommendation: 'This project is suitable for students with an interest in weather forecasting and data management.',
    description: 'The goal of this project is to achieve highly accurate weather predictions to maximize observation time. \
                  This requires getting a good understanding of weather forecasting and proficient management of data from \
                  different weather stations. Thorough execution of this project is essential to prevent damage to the expensive \
                  tools and ensure the reliability and safety of observations.',
    tasks: 'Gathering and storing data from the local weather station \
            Develop a system to assess the current cloud cover using a sky-facing camera and/or the Météo Suisse data. \
            Creation of a method that allow or not observations. It would take as input the Météo Suisse data, camera informations, the local weather station data, ... \
            Build an interface between the local weather station and the telescope control software.',
    prerequisites: 'A good understanding of weather forecasting. \
                    Skills in data management and analysis.\
                    Proficiency in handling and interpreting weather station data.',
    constraints: 'Self-sufficient dome. \
                  Remote location. \
                  High accuracy required.'
  },
  { 
    id: '3', 
    title: 'DESIGN OF A CUPOLA', 
    availabl: 'Yes', 
    date: '02.10.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    imageSrc: '/projects/cupola.png', 
    recommendation: 'This project is suitable for students with a background in building facilities and 3D modeling',
    description: 'In this project, a student from GM and another from GC will team up to design a new cupola. \
                  They’ll take the existing prototype, scale it up, and fix any issues. This new cupola will run \
                  completely on its own energy and in a remote location where quick human help isn’t an option. By \
                  the end of the semester, the design should be done, and then the actual building of the cupola will \
                  start. If the students want, they can also participate to the construction',
    tasks: 'Taking note of the report done for the prototype and finding solutions for any improvements that need to be made.\
            Designing the new cupola considering the report and the different constraints.\
            Building the new cupola (if desired).',
    prerequisites: 'Skills in building facilities\
                    Familiarity with a 3D design program',
    constraints: 'Self-sufficient dome.\
                  Remote location.'
  },
  { 
    id: '4', 
    title: 'DESIGN OF A CUPOLA', 
    availabl: 'Yes', 
    date: '02.10.2024',
    owner: 'Aymeric Deslarzes\
            Josué Aubert',
    imageSrc: '/projects/cupola.png', 
    recommendation: 'This project is suitable for students with a background in building facilities and 3D modeling',
    description: 'In this project, a student from GM and another from GC will team up to design a new cupola. \
                  They’ll take the existing prototype, scale it up, and fix any issues. This new cupola will run \
                  completely on its own energy and in a remote location where quick human help isn’t an option. By \
                  the end of the semester, the design should be done, and then the actual building of the cupola will \
                  start. If the students want, they can also participate to the construction',
    tasks: 'Taking note of the report done for the prototype and finding solutions for any improvements that need to be made.\
            Designing the new cupola considering the report and the different constraints.\
            Building the new cupola (if desired).',
    prerequisites: 'Skills in building facilities\
                    Familiarity with a 3D design program',
    constraints: 'Self-sufficient dome.\
                  Remote location.'
  },
];

export default previousProjects;
