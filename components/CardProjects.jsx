import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ items, selectedId, setSelectedId }) => {

  return (
    // Define the space for scrolling cards (horizontaly)
    <div className="flex gap-5 overflow-x-auto whitespace-nowrap max-w-[1000px]"> 
      {/* Initialisation of the cards */}
      {items.map(item => ( // Map through the items array
        <motion.div // Animate the card
          key={item.id} 
          layoutId={item.id} 
          className="p-4 text-black border-2 rounded-xl bg-white cursor-pointer overflow-hidden" 
          onClick={() => setSelectedId(item.id)} 
          style={{
            height: '400px',
            width: '312px',
            flex: '0 0 auto'  // Ensure the card does not shrink or grow
          }}
          initial={{ scale: 1, borderColor: 'transparent' }}
          whileHover={{ scale: 0.96, borderColor: '#FF0000' }}  // Shrinks and changes border color on hover
        >
          {/* Title */}
          <div className="text-black font-semibold middle text-xl mb-2"> 
            {item.title}
          </div>
          {/* Image and description */}
          <motion.div >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-1/2 w-full object-cover rounded-md mb-2"
            />
            <motion.p
              className="text-black/70 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 7,  // Limits the text to 5 lines
                overflow: 'hidden',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {item.description}
              {selectedId === item.id && ' Additional text goes here when the card is expanded.'}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed xl:top-10 xl:left-1/3 xl:w-1/3 h-auto max-h-8/9 w-full top-1 left-1 bg-white p-8 rounded-xl flex flex-col items-center justify-center z-50 border-4 border-black overflow-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {items.map(item => (
              item.id === selectedId && (
                <div key={item.id} className="w-full h-full flex flex-col">
                  <motion.h1 className="text-black font-bold underline  text-3xl mb-2">{item.title}</motion.h1>
                  <motion.h2 classeName="font-semibold" >{item.subtitle}</motion.h2>
                  <motion.img src={item.imageSrc} alt={item.title} className="w-1/2 h-auto rounded-md mb-2" />
                  <motion.h2 classeName="font-semibold">Context :</motion.h2>
                    <motion.p className="text-black/80 overflow-auto" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      {item.description}
                    </motion.p>
                  <motion.h2 classeName="font-semibold">Project scope :</motion.h2>
                    <motion.p className="text-black/80 overflow-auto" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      {item.scope}
                    </motion.p>
                  <motion.h2 classeName="font-semibold">Prerequisites :</motion.h2>
                    <motion.ul
                      className="text-black/80 overflow-auto list-disc list-inside ml-4"
                      style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.5 } }}
                      exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                      {item.prerequisites.split('. ').map((point, index) => (
                        point.trim() && <li key={index}>{point.trim()}</li>
                      ))}
                    </motion.ul>
                  <div className="flex justify-center ">
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className="w-32 px-4 py-2 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.5 } }}
                      exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
