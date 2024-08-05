import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LinkTree = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto' }}>
            <motion.a
                href="https://linktr.ee/ssaepflteam"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
                whileHover={{
                    scale: 0.94, // Slight scale decrease on hover
                    filter: 'brightness(1.2)' // Slight brightness increase on hover
                }}
                transition={{ duration: 0.1 }} // Transition duration for smoother effect
            >
                <motion.div 
                  style={{ 
                    display: 'inline-block', 
                    filter: 'brightness(0.9)', // Lower initial brightness
                    transition: 'border-color 0.2s, filter 0.2s' 
                  }}
                >
                    <Image
                        src={'/images/linktree.svg'}
                        alt="Linktree"
                        width={300} // Adjusted size for better responsiveness
                        height={300}
                        style={{ 
                            maxWidth: '90%', 
                            height: 'auto',
                            backgroundColor: 'white', // Background color for better contrast
                            borderRadius: '5px', // Rounded corners for visual enhancement
                        }}
                    />
                </motion.div>
            </motion.a>
        </div>
    );
};

export default LinkTree;
