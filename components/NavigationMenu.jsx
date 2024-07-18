import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import WireframeLogo from '@/components/WireframeLogo';
import SolidLogo from '@/components/SolidLogo';
import Link from 'next/link';

export default function NavigationMenu() {
  let [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('/');
  const [currentPage, setCurrentPage] = useState({
    title: 'SSA',
    url: '/',
    iconUrl: '/ssa_logo/SSA_FULL_LOGO.png',
    description: 'Sustainability in space',
    navdescription: 'Homepage',
  });
  const [formattedList, setFormattedList] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const pages = [
    {
      id: 0,
      title: 'Orbit simulation',
      url: '/',
      iconUrl: '/others/about-icon.png',
      description: 'Space Situation Awareness',
      navdescription: 'Homepage',
    },
    {
      id: 1,
      title: 'SSA',
      url: '/studio',
      iconUrl: '/others/about-icon.png',
      description: 'Learn more about us',
      navdescription: 'Learn more about us',
    },
    {
      id: 2,
      title: 'Database',
      url: '/database',
      iconUrl: '/others/Bulbe.jpg',
      description: 'Open access to database',
      navdescription: 'Open access to database',
    },
  ];

  // useEffect to get current url every time a new page is loaded
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
    setCurrentPage(pages.filter((page) => page.url === currentUrl)[0]);
    formatNavList();
  }, [currentUrl]);

  function formatNavList() {
    let formattedList = pages.filter((page) => page.url !== currentUrl);
    formattedList.sort((a, b) => a.id - b.id);
    setFormattedList(formattedList);
  }

  return (
    <div className="font-SctoGrotesk fixed top-6 right-6">
      {/* Bottom nav bar */}
      <motion.div
        initial={{ scale: 1, borderColor: 'transparent', opacity: 0, width: '10%', height: '10%' }}
        animate={{ opacity: 1, width: IsMenuOpen ? 400 : 'auto', height: IsMenuOpen ? 400 : 'auto' }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 10,
          delay: 0,
        }}
        onClick={() => {
          if (!IsMenuOpen) setIsMenuOpen(true);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 0.94, borderColor: '#FF0000' }}
        className="bg-white shadow-md border-2 cursor-pointer rounded-lg inline-flex justify-start
                   w-auto sm:w-[650px]"
      >
        <AnimatePresence mode="popLayout">
          {!IsMenuOpen && (
            <motion.div className="flex justify-end w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="flex justify-between items-center w-full p-5"
              >
                <div className="flex items-center gap-2 w-full">
                  {/* SSA in the NavBar */}
                  <div className="text-black underline">{currentPage.title}</div>
                  {/* <div className="text-black/40">/</div> */}
                  {/* <div className="text-black truncate text-ellipsis  flex-grow">
                    {isHovering ? 'View' : currentPage.description}
                  </div> */}
                  <div
                    className="hover:bg-black/10 justify-end rounded-md transition-all flex-shrink-0"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    {/* Three dot next to SSA */}
                    {/* <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.0001C9.10457 14.0001 10 14.8956 10 16.0001C10 17.1047 9.10457 18.0001 8 18.0001C6.89543 18.0001 6 17.1047 6 16.0001C6 14.8956 6.89543 14.0001 8 14.0001Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M16 14.0001C17.1046 14.0001 18 14.8956 18 16.0001C18 17.1047 17.1046 18.0001 16 18.0001C14.8954 18.0001 14 17.1047 14 16.0001C14 14.8956 14.8954 14.0001 16 14.0001Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M26 16.0001C26 14.8956 25.1046 14.0001 24 14.0001C22.8954 14.0001 22 14.8956 22 16.0001C22 17.1047 22.8954 18.0001 24 18.0001C25.1046 18.0001 26 17.1047 26 16.0001Z"
                        fill="#1C1C1C"
                      />
                    </svg> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {IsMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col justify-between w-full h-full"
            >
              <motion.div className="flex flex-col">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.6,
                    ease: 'easeInOut',
                  }}
                  className="flex justify-between items-center w-full h-[72px]  px-5"
                >
                  <Link href="/" className=" font-semibold text-lg text-black">
                    {currentPage.title}
                  </Link>
                  <div
                    className="hover:bg-black/10 rounded-md transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2943 9.83635C10.9037 9.44583 10.2706 9.44583 9.88005 9.83635C9.48953 10.2269 9.48953 10.86 9.88005 11.2506L15.5369 16.9075L9.88013 22.5643C9.4896 22.9548 9.4896 23.588 9.88013 23.9785C10.2707 24.369 10.9038 24.369 11.2943 23.9785L16.9512 18.3217L22.608 23.9785C22.9985 24.369 23.6317 24.369 24.0222 23.9785C24.4127 23.588 24.4127 22.9548 24.0222 22.5643L18.3654 16.9075L24.0223 11.2506C24.4128 10.86 24.4128 10.2269 24.0223 9.83635C23.6317 9.44583 22.9986 9.44583 22.608 9.83635L16.9512 15.4932L11.2943 9.83635Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 0,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  {formattedList.map((page) => (
                    <Link
                      href={page.url}
                      className="flex gap-4 justify-between items-center w-full px-5 h-[72px] border-y-[1px] hover:bg-black/10 transition-all"
                    >
                      <div>
                        <img
                          src={page.iconUrl}
                          className="h-10 w-10"
                          alt={page.title}
                        />
                      </div>
                      <div className="flex-grow text-[#1c1c1c] flex ">
                        <div className="px-4 w-28">{page.title}</div>
                        <div className="px-4 hidden md:block">/</div>
                        <div className="px-4 hidden md:block">
                          {page.navdescription}
                        </div>
                      </div>
                      <div
                        className="hover:bg-black/10 rounded-md transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.13477 17.262H27.1348C27.687 17.262 28.1348 16.8142 28.1348 16.262C28.1348 15.7097 27.687 15.262 27.1348 15.262H5.13477C4.58248 15.262 4.13477 15.7097 4.13477 16.262C4.13477 16.8142 4.58248 17.262 5.13477 17.262Z"
                            fill="#1C1C1C"
                          />
                          <path
                            d="M25.7206 16.262L17.4277 24.5549C17.2401 24.7424 17.1348 24.9967 17.1348 25.262C17.1348 25.5272 17.2401 25.7815 17.4277 25.9691C17.6152 26.1566 17.8695 26.262 18.1348 26.262C18.4 26.262 18.6543 26.1566 18.8419 25.9691L27.8419 16.9691C28.2324 16.5785 28.2324 15.9454 27.8419 15.5549L18.8419 6.55486C18.6543 6.36732 18.4 6.26196 18.1348 6.26196C17.8695 6.26196 17.6152 6.36732 17.4277 6.55486C17.2401 6.74239 17.1348 6.99675 17.1348 7.26196C17.1348 7.52718 17.2401 7.78153 17.4277 7.96907L25.7206 16.262Z"
                            fill="#1C1C1C"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2, delay: 0.6, ease: 'easeInOut' }}
                className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:h-[72px] md:pl-6 md:pr-5"
              >
                {/* <div className="font-semibold w-full text-black text-center md:text-left text-lg mb-5 md:mb-2 leading-none">
                  Building the digital <br className="hidden md:block" /> future
                </div> */}
                <div className="rounded-lg flex-shrink-0 mb-5 md:mb-0 font-semibold w-max h-11 p-4 border-black/20 text-black border-[1px] flex justify-center items-center">
                  Chat with us
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
