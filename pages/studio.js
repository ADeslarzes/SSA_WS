import React from 'react';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import FooterSVG from '@/components/FooterSVG';
import Link from 'next/link';
import FooterSVGMobile from '@/components/FooterSVGMobile';
import Image from 'next/image';
import BGImage from '@/public/images/studio.png';
import { motion, useScroll, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Torus from '@/components/Torus';
import CardProjects from '@/components/CardProjects';
import TimeLine from '@/components/TimeLineSlider';
import currentProjects from '@/src/currentProjects';
import sideProjects from '@/src/sideProjects';
import previousProjects from '@/src/previousProjects';

export default function studionew() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [isTargetInView, setIsTargetInView] = useState(true);

  const checkIsInView = () => {
    const target = document.getElementById('target');
    if (target) {
      const rect = target.getBoundingClientRect();
      setIsTargetInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
      console.log(isTargetInView);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIsInView);

    return () => {
      window.removeEventListener('scroll', checkIsInView);
    };
  }, []);

  useEffect(() => {
    // Replace 768 with the minimum width that you consider to be "desktop"
    if (window.innerWidth > 768) {
      if (isTargetInView) {
        controls.start({
          scale: 0.97,
          transition: { duration: 0.3 },
        });
      } else {
        controls.start({
          scale: 1,
          transition: { duration: 0.3 },
        });
      }
    }
  }, [isTargetInView]);

  // Define the id for three different slides (current, previous, and side projects)
  const [mainSelectedId, setMainSelectedId] = useState(null);
  const [sideSelectedId, setSideSelectedId] = useState(null);
  const [previousSelectedId, setPreviousSelectedId] = useState(null);

  const handleCardClick = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };
  return (
    <div className="w-screen relative min-h-screen font-SctoGrotesk">
      <div className="h-screen w-screen"></div> {/* Space for Torus image */}
      <div className="h-screen fixed -z-10 top-0 w-screen bg-black flex items-center flex-col justify-center md:max-h-max">
        {/* <div className="w-full z-20  p-9 md:p-16 absolute top-0 h-max flex justify-between items-center font-semibold"></div> */}
        {/* Image du studio */}
        <div>
          <Torus />
        </div>
      </div>

      <div>
        <NavigationMenu />
      </div>

      <div className="bg-black md:bg-black rounded-t-2xl">
        <motion.div
          id="toBeScaled"
          initial={{ scale: 1 }}
          animate={controls}
          className="w-screen min-h-screen -mt-16 rounded-2xl bg-black shadow-inner flex items-center flex-col md:max-h-max"
        >
        {/* Description of the association */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0  h-full md:sticky top-12 font-Lato">
              SSA
            </div>
            <div className="flex-grow">
              <div className="flex flex-col  max-w-[1500px]">
                <div className="text-white mb-12 text-xl" style={{ Width: '90%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
                  Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
                </div>
              </div>
            </div>
          </div>
        {/* Main projects */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0  h-full md:sticky top-12 font-Lato">
              Main Projects
            </div>
            <div className="flex-grow">
              <div className="flex flex-col  max-w-[1500px]">
                <div className="text-white mb-12 text-xl" style={{ Width: '90%' }}>
                  We are currently working on a number of projects that aim to render this world a better place. 
                  Here are some of the projects we are currently working on:
                </div>
                {/* Slides */}
                {/* <CardProjects items={currentProjects} selectedId={mainSelectedId} setSelectedId={setMainSelectedId} /> */}
              </div>
            </div>
          </div>
        {/* Side projects */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0  h-full md:sticky top-12 font-Lato">
              Side Projects
            </div>
            <div className="flex-grow">
              <div className="flex flex-col  max-w-[1500px]">
                <div className="text-white mb-12 text-xl" style={{ Width: '90%' }}>
                  We are currently working on a number of side projects that aim to render this world a better place. Here are some of the projects we are currently working on:
                </div>
                {/* Slides */}
                {/* <CardProjects items={sideProjects} selectedId={sideSelectedId} setSelectedId={setSideSelectedId} /> */}
              </div>
            </div>
          </div>
        {/* TimeLIne */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0 h-full md:sticky top-12 font-Lato">
              Timeline
            </div>
            <div className="flex-grow">
              {/* <div className="flex flex-col max-w-[1500px]">
                <TimeLine selectedId={previousSelectedId} setSelectedId={setPreviousSelectedId} />
              </div> */}
            </div>
          </div>
        {/* Description of the team */}
          <div className="pt-14 md:pt-28 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px]  justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] mb-8 md:mb-0 text-3xl md:text-5xl w-[300px] h-full md:sticky top-12 font-Lato">
              TEAM LEAD 
            </div>
            <div className="flex-grow">
              <div className="flex flex-col  max-w-[1500px]">
                <div className="text-white mb-12 md:w-3/4 text-xl">
                  Our team consists of members with diverse backgrounds,
                  including designers, technologists, and researchers. This
                  unique blend of expertise empowers us to create innovative
                  solutions that pair cutting-edge technology with intuitive
                  user experiences. With a primary focus on blockchain
                  technology, and years of experience across a variety of
                  industries, we are committed to pushing the boundaries of
                  what's possible, constantly redefining the landscape of
                  digital innovation.
                </div>
                <div className="flex  gap-5 flex-col lg:flex-row">
                  {/* Josué */}
                  <div className="w-full md:max-w-[300px] min-h-[200px] p-8 flex flex-col text-black rounded-xl bg-white">
                    <div className="w-full h-[250px] bg-josue bg-cover md:block hidden rounded-lg mb-2"></div>
                    <div className="flex gap-x-2 mb-2">
                      <div className="bg-[#B00000] text-md text-black px-2 py-0.5 rounded-md">
                        Lead
                      </div>
                    </div>
                    <p className="text-black font-semibold">
                      Josué Aubert{' '}
                    </p>
                    <a className="text-black/40 text-[#B00000]" href="mailto:josue.aubert@epfl.ch">josue.aubert@epfl.ch</a>
                    <p className="text-black/40">
                      PH BA3
                    </p>
                    <p className='text-black/40'>
                      Super beau gosse
                    </p>
                  </div>
                  {/* Aymeric */}
                  <div className="w-full md:max-w-[300px] min-h-[200px] p-8 flex flex-col text-black rounded-xl bg-white">
                    <div className="w-full h-[250px] bg-aymeric bg-cover md:block hidden rounded-lg mb-2"></div>
                    <div className="flex gap-x-2 mb-2">
                      <div className="bg-[#B00000] text-md text-black px-2 py-0.5 rounded-md">
                        Lead
                      </div>
                    </div>
                    <p className="text-black font-semibold">
                      Aymeric Deslarzes{' '}
                    </p>
                    <a className="text-black/40 text-[#B00000]" href="mailto:aymeric.deslarzes@epfl.ch">aymeric.deslarzes@epfl.ch</a>
                    <p className="text-black/40">
                      PH BA3
                    </p>
                  </div>
                  {/* Autre */}
                  <div className="w-full md:max-w-[300px] min-h-[200px] p-8 flex flex-col text-black rounded-xl bg-white">
                    <div className="w-full h-[250px] bg-stanislas bg-cover md:block hidden rounded-lg mb-2"></div>
                    <div className="flex gap-x-2 mb-2">
                      <div className="bg-[#B00000] text-md text-black px-2 py-0.5 rounded-md">
                        Lead
                      </div>
                    </div>
                    <p className="text-black font-semibold">
                      Juery Stanislas{' '}
                    </p>
                    <p className="text-black/40">
                      Creative director and entrepreneur, melds tech and fashion
                      culture in his work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Find us */}
          <div className="pt-14 md:pt-28  flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between  mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] md:sticky top-12 font-Lato">
              FIND US
            </div>
            <div className="flex-grow flex justify-start">
              <div className="flex flex-col w-full">
                <div className="text-white w-full pt-8 md:pt-0 mb-5 md:text-4xl md:font-bold font-SctoGrotesk">
                  Founded in 2023, active globally:
                </div>
                <div className="flex  gap-5 flex-col lg:flex-row">
                  <div className="w-full border border-black rounded-lg px-4 py-7 flex justify-start">
                    <div className="pr-3">
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.6482 18.2684C31.6482 25.596 25.7081 31.5362 18.3805 31.5362C11.0529 31.5362 5.11279 25.596 5.11279 18.2684C5.11279 10.9409 11.0529 5.00073 18.3805 5.00073C25.7081 5.00073 31.6482 10.9409 31.6482 18.2684Z"
                          fill="black"
                          fill-opacity="0.1"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3807 3.89502C18.3807 3.89502 21.3042 3.89502 23.9758 5.025C23.9758 5.025 26.5554 6.11608 28.5442 8.10488C28.5442 8.10488 30.533 10.0937 31.6241 12.6733C31.6241 12.6733 32.754 15.3449 32.754 18.2684C32.754 18.2684 32.754 21.1919 31.6241 23.8635C31.6241 23.8635 30.533 26.4431 28.5442 28.4319C28.5442 28.4319 26.5554 30.4207 23.9758 31.5118C23.9758 31.5118 21.3042 32.6417 18.3807 32.6417C18.3807 32.6417 15.4572 32.6417 12.7856 31.5118C12.7856 31.5118 10.206 30.4207 8.21718 28.4319C8.21718 28.4319 6.22839 26.4431 5.13731 23.8635C5.13731 23.8635 4.00732 21.1919 4.00732 18.2684C4.00732 18.2684 4.00732 15.3449 5.13731 12.6733C5.13731 12.6733 6.22839 10.0937 8.21718 8.10488C8.21718 8.10488 10.206 6.11608 12.7856 5.025C12.7856 5.025 15.4572 3.89502 18.3807 3.89502ZM18.3807 6.1063C18.3807 6.1063 15.9056 6.1063 13.647 7.06161C13.647 7.06161 11.4646 7.98467 9.7808 9.66849C9.7808 9.66849 8.09698 11.3523 7.17391 13.5347C7.17391 13.5347 6.21861 15.7933 6.21861 18.2684C6.21861 18.2684 6.21861 20.7435 7.17391 23.0021C7.17391 23.0021 8.09698 25.1844 9.7808 26.8683C9.7808 26.8683 11.4646 28.5521 13.647 29.4751C13.647 29.4751 15.9056 30.4305 18.3807 30.4305C18.3807 30.4305 20.8558 30.4305 23.1144 29.4751C23.1144 29.4751 25.2967 28.5521 26.9806 26.8683C26.9806 26.8683 28.6644 25.1844 29.5875 23.0021C29.5875 23.0021 30.5428 20.7435 30.5428 18.2684C30.5428 18.2684 30.5428 15.7933 29.5875 13.5347C29.5875 13.5347 28.6644 11.3523 26.9806 9.66849C26.9806 9.66849 25.2967 7.98467 23.1144 7.06161C23.1144 7.06161 20.8558 6.10631 18.3807 6.1063Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 14.9515H30.8884C31.499 14.9515 31.994 14.4565 31.994 13.8459C31.994 13.2352 31.499 12.7402 30.8884 12.7402H5.87322C5.26259 12.7402 4.76758 13.2352 4.76758 13.8459C4.76758 14.4565 5.26259 14.9515 5.87322 14.9515Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 23.7966H30.8884C31.499 23.7966 31.994 23.3016 31.994 22.691C31.994 22.0803 31.499 21.5853 30.8884 21.5853H5.87322C5.26259 21.5853 4.76758 22.0803 4.76758 22.691C4.76758 23.3016 5.26259 23.7966 5.87322 23.7966Z"
                          fill="#1C1C1C"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3809 4.25439C18.3809 4.25439 19.9596 4.25439 21.3097 5.58778C21.3097 5.58778 22.4559 6.71982 23.3063 8.70554C23.3063 8.70554 25.0148 12.6948 25.0148 18.2684C25.0148 18.2684 25.0148 23.842 23.3063 27.8313C23.3063 27.8313 22.4559 29.817 21.3097 30.9491C21.3097 30.9491 19.9596 32.2824 18.3809 32.2824C18.3809 32.2824 16.8023 32.2824 15.4522 30.9491C15.4522 30.9491 14.3059 29.817 13.4555 27.8313C13.4555 27.8313 11.7471 23.842 11.7471 18.2684C11.7471 18.2684 11.7471 12.6948 13.4555 8.70554C13.4555 8.70554 14.3059 6.71982 15.4522 5.58778C15.4522 5.58778 16.8023 4.25439 18.3809 4.25439ZM18.3809 6.46568C18.3809 6.46568 17.7102 6.46568 17.006 7.1611C17.006 7.1611 16.1681 7.98867 15.4882 9.57609C15.4882 9.57609 13.9584 13.1484 13.9584 18.2684C13.9584 18.2684 13.9584 23.3885 15.4882 26.9608C15.4882 26.9608 16.1681 28.5482 17.006 29.3757C17.006 29.3757 17.7102 30.0712 18.3809 30.0712C18.3809 30.0712 19.0517 30.0712 19.7558 29.3757C19.7558 29.3757 20.5938 28.5482 21.2736 26.9607C21.2736 26.9607 22.8035 23.3884 22.8035 18.2684C22.8035 18.2684 22.8035 13.1484 21.2736 9.57609C21.2736 9.57609 20.5938 7.98867 19.7558 7.1611C19.7558 7.1611 19.0517 6.46568 18.3809 6.46568Z"
                          fill="#1C1C1C"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-black font-semibold">
                        Geneva, Switzerland
                      </div>
                      <div className="text-black/40 md:w-max font-regular">
                        rue du Nant 25, 1207 Genève
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-black rounded-lg px-4 py-7 flex justify-start">
                    <div className="pr-3">
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.6482 18.2684C31.6482 25.596 25.7081 31.5362 18.3805 31.5362C11.0529 31.5362 5.11279 25.596 5.11279 18.2684C5.11279 10.9409 11.0529 5.00073 18.3805 5.00073C25.7081 5.00073 31.6482 10.9409 31.6482 18.2684Z"
                          fill="black"
                          fill-opacity="0.1"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3807 3.89502C18.3807 3.89502 21.3042 3.89502 23.9758 5.025C23.9758 5.025 26.5554 6.11608 28.5442 8.10488C28.5442 8.10488 30.533 10.0937 31.6241 12.6733C31.6241 12.6733 32.754 15.3449 32.754 18.2684C32.754 18.2684 32.754 21.1919 31.6241 23.8635C31.6241 23.8635 30.533 26.4431 28.5442 28.4319C28.5442 28.4319 26.5554 30.4207 23.9758 31.5118C23.9758 31.5118 21.3042 32.6417 18.3807 32.6417C18.3807 32.6417 15.4572 32.6417 12.7856 31.5118C12.7856 31.5118 10.206 30.4207 8.21718 28.4319C8.21718 28.4319 6.22839 26.4431 5.13731 23.8635C5.13731 23.8635 4.00732 21.1919 4.00732 18.2684C4.00732 18.2684 4.00732 15.3449 5.13731 12.6733C5.13731 12.6733 6.22839 10.0937 8.21718 8.10488C8.21718 8.10488 10.206 6.11608 12.7856 5.025C12.7856 5.025 15.4572 3.89502 18.3807 3.89502ZM18.3807 6.1063C18.3807 6.1063 15.9056 6.1063 13.647 7.06161C13.647 7.06161 11.4646 7.98467 9.7808 9.66849C9.7808 9.66849 8.09698 11.3523 7.17391 13.5347C7.17391 13.5347 6.21861 15.7933 6.21861 18.2684C6.21861 18.2684 6.21861 20.7435 7.17391 23.0021C7.17391 23.0021 8.09698 25.1844 9.7808 26.8683C9.7808 26.8683 11.4646 28.5521 13.647 29.4751C13.647 29.4751 15.9056 30.4305 18.3807 30.4305C18.3807 30.4305 20.8558 30.4305 23.1144 29.4751C23.1144 29.4751 25.2967 28.5521 26.9806 26.8683C26.9806 26.8683 28.6644 25.1844 29.5875 23.0021C29.5875 23.0021 30.5428 20.7435 30.5428 18.2684C30.5428 18.2684 30.5428 15.7933 29.5875 13.5347C29.5875 13.5347 28.6644 11.3523 26.9806 9.66849C26.9806 9.66849 25.2967 7.98467 23.1144 7.06161C23.1144 7.06161 20.8558 6.10631 18.3807 6.1063Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 14.9515H30.8884C31.499 14.9515 31.994 14.4565 31.994 13.8459C31.994 13.2352 31.499 12.7402 30.8884 12.7402H5.87322C5.26259 12.7402 4.76758 13.2352 4.76758 13.8459C4.76758 14.4565 5.26259 14.9515 5.87322 14.9515Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 23.7966H30.8884C31.499 23.7966 31.994 23.3016 31.994 22.691C31.994 22.0803 31.499 21.5853 30.8884 21.5853H5.87322C5.26259 21.5853 4.76758 22.0803 4.76758 22.691C4.76758 23.3016 5.26259 23.7966 5.87322 23.7966Z"
                          fill="#1C1C1C"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3809 4.25439C18.3809 4.25439 19.9596 4.25439 21.3097 5.58778C21.3097 5.58778 22.4559 6.71982 23.3063 8.70554C23.3063 8.70554 25.0148 12.6948 25.0148 18.2684C25.0148 18.2684 25.0148 23.842 23.3063 27.8313C23.3063 27.8313 22.4559 29.817 21.3097 30.9491C21.3097 30.9491 19.9596 32.2824 18.3809 32.2824C18.3809 32.2824 16.8023 32.2824 15.4522 30.9491C15.4522 30.9491 14.3059 29.817 13.4555 27.8313C13.4555 27.8313 11.7471 23.842 11.7471 18.2684C11.7471 18.2684 11.7471 12.6948 13.4555 8.70554C13.4555 8.70554 14.3059 6.71982 15.4522 5.58778C15.4522 5.58778 16.8023 4.25439 18.3809 4.25439ZM18.3809 6.46568C18.3809 6.46568 17.7102 6.46568 17.006 7.1611C17.006 7.1611 16.1681 7.98867 15.4882 9.57609C15.4882 9.57609 13.9584 13.1484 13.9584 18.2684C13.9584 18.2684 13.9584 23.3885 15.4882 26.9608C15.4882 26.9608 16.1681 28.5482 17.006 29.3757C17.006 29.3757 17.7102 30.0712 18.3809 30.0712C18.3809 30.0712 19.0517 30.0712 19.7558 29.3757C19.7558 29.3757 20.5938 28.5482 21.2736 26.9607C21.2736 26.9607 22.8035 23.3884 22.8035 18.2684C22.8035 18.2684 22.8035 13.1484 21.2736 9.57609C21.2736 9.57609 20.5938 7.98867 19.7558 7.1611C19.7558 7.1611 19.0517 6.46568 18.3809 6.46568Z"
                          fill="#1C1C1C"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-black font-semibold">
                        Shanghai, China
                      </div>
                      <div className="text-black/40 w-max font-regular">
                        280 Wukand road lane
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-black rounded-lg px-4 py-7 flex justify-start">
                    <div className="pr-3">
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.6482 18.2684C31.6482 25.596 25.7081 31.5362 18.3805 31.5362C11.0529 31.5362 5.11279 25.596 5.11279 18.2684C5.11279 10.9409 11.0529 5.00073 18.3805 5.00073C25.7081 5.00073 31.6482 10.9409 31.6482 18.2684Z"
                          fill="black"
                          fill-opacity="0.1"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3807 3.89502C18.3807 3.89502 21.3042 3.89502 23.9758 5.025C23.9758 5.025 26.5554 6.11608 28.5442 8.10488C28.5442 8.10488 30.533 10.0937 31.6241 12.6733C31.6241 12.6733 32.754 15.3449 32.754 18.2684C32.754 18.2684 32.754 21.1919 31.6241 23.8635C31.6241 23.8635 30.533 26.4431 28.5442 28.4319C28.5442 28.4319 26.5554 30.4207 23.9758 31.5118C23.9758 31.5118 21.3042 32.6417 18.3807 32.6417C18.3807 32.6417 15.4572 32.6417 12.7856 31.5118C12.7856 31.5118 10.206 30.4207 8.21718 28.4319C8.21718 28.4319 6.22839 26.4431 5.13731 23.8635C5.13731 23.8635 4.00732 21.1919 4.00732 18.2684C4.00732 18.2684 4.00732 15.3449 5.13731 12.6733C5.13731 12.6733 6.22839 10.0937 8.21718 8.10488C8.21718 8.10488 10.206 6.11608 12.7856 5.025C12.7856 5.025 15.4572 3.89502 18.3807 3.89502ZM18.3807 6.1063C18.3807 6.1063 15.9056 6.1063 13.647 7.06161C13.647 7.06161 11.4646 7.98467 9.7808 9.66849C9.7808 9.66849 8.09698 11.3523 7.17391 13.5347C7.17391 13.5347 6.21861 15.7933 6.21861 18.2684C6.21861 18.2684 6.21861 20.7435 7.17391 23.0021C7.17391 23.0021 8.09698 25.1844 9.7808 26.8683C9.7808 26.8683 11.4646 28.5521 13.647 29.4751C13.647 29.4751 15.9056 30.4305 18.3807 30.4305C18.3807 30.4305 20.8558 30.4305 23.1144 29.4751C23.1144 29.4751 25.2967 28.5521 26.9806 26.8683C26.9806 26.8683 28.6644 25.1844 29.5875 23.0021C29.5875 23.0021 30.5428 20.7435 30.5428 18.2684C30.5428 18.2684 30.5428 15.7933 29.5875 13.5347C29.5875 13.5347 28.6644 11.3523 26.9806 9.66849C26.9806 9.66849 25.2967 7.98467 23.1144 7.06161C23.1144 7.06161 20.8558 6.10631 18.3807 6.1063Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 14.9515H30.8884C31.499 14.9515 31.994 14.4565 31.994 13.8459C31.994 13.2352 31.499 12.7402 30.8884 12.7402H5.87322C5.26259 12.7402 4.76758 13.2352 4.76758 13.8459C4.76758 14.4565 5.26259 14.9515 5.87322 14.9515Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M5.87322 23.7966H30.8884C31.499 23.7966 31.994 23.3016 31.994 22.691C31.994 22.0803 31.499 21.5853 30.8884 21.5853H5.87322C5.26259 21.5853 4.76758 22.0803 4.76758 22.691C4.76758 23.3016 5.26259 23.7966 5.87322 23.7966Z"
                          fill="#1C1C1C"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3809 4.25439C18.3809 4.25439 19.9596 4.25439 21.3097 5.58778C21.3097 5.58778 22.4559 6.71982 23.3063 8.70554C23.3063 8.70554 25.0148 12.6948 25.0148 18.2684C25.0148 18.2684 25.0148 23.842 23.3063 27.8313C23.3063 27.8313 22.4559 29.817 21.3097 30.9491C21.3097 30.9491 19.9596 32.2824 18.3809 32.2824C18.3809 32.2824 16.8023 32.2824 15.4522 30.9491C15.4522 30.9491 14.3059 29.817 13.4555 27.8313C13.4555 27.8313 11.7471 23.842 11.7471 18.2684C11.7471 18.2684 11.7471 12.6948 13.4555 8.70554C13.4555 8.70554 14.3059 6.71982 15.4522 5.58778C15.4522 5.58778 16.8023 4.25439 18.3809 4.25439ZM18.3809 6.46568C18.3809 6.46568 17.7102 6.46568 17.006 7.1611C17.006 7.1611 16.1681 7.98867 15.4882 9.57609C15.4882 9.57609 13.9584 13.1484 13.9584 18.2684C13.9584 18.2684 13.9584 23.3885 15.4882 26.9608C15.4882 26.9608 16.1681 28.5482 17.006 29.3757C17.006 29.3757 17.7102 30.0712 18.3809 30.0712C18.3809 30.0712 19.0517 30.0712 19.7558 29.3757C19.7558 29.3757 20.5938 28.5482 21.2736 26.9607C21.2736 26.9607 22.8035 23.3884 22.8035 18.2684C22.8035 18.2684 22.8035 13.1484 21.2736 9.57609C21.2736 9.57609 20.5938 7.98867 19.7558 7.1611C19.7558 7.1611 19.0517 6.46568 18.3809 6.46568Z"
                          fill="#1C1C1C"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-black font-semibold">
                        hint3rland.eth
                      </div>
                      <div className="text-black/40 font-regular truncate w-32 md:w-64 ">
                        0xaf6Fa688f194283eEB45E8D35B355702cE26a87F .eth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer for studio page */}
      {/* <div className="bg-[#D9D9D9] w-screen hidden md:block px-12 pt-8 pb-12">
        <div id="target"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:flex flex-col justify-center items-center"
        >
          <FooterSVG />
          <div className="flex pt-8 lg:max-w-[1700px] w-full justify-between">
            <div>© 2023 Hint3rland sarl</div>
            <div className="flex gap-x-4">
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Support</Link>
              <Link href={'/'}>Contact Us</Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="block md:hidden w-screen bg-black p-8 -mt-6">
        <FooterSVGMobile />
      </div>  */}
    </div>
  );
}
