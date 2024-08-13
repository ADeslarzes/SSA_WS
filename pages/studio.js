import React from 'react';
import SolidLogo from '@/components/SolidLogo';
import NavigationMenu from '@/components/NavigationMenu';
import FooterSVG from '@/components/FooterSVG';
import Link from 'next/link';
import Image from 'next/image';
import BGImage from '@/public/images/studio.png';
import { motion, useScroll, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Torus from '@/components/Torus';
import CardProjects from '@/components/CardProjects';
import currentProjects from '@/src/currentProjects';
import sideProjects from '@/src/sideProjects';
import previousProjects from '@/src/previousProjects';
import Timeline from '@/components/TimeLineSlider';

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
          className="w-screen min-h-screen absolute overflow-hidden -mt-16 rounded-2xl bg-black shadow-inner items-center md:max-h-max"
        >
        {/* Description of the association */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
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
        {/* TimeLIne */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px] mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[150px] mb-8 md:mb-0 h-full md:sticky top-12 font-Lato">
              Timeline
            </div>
            <div className="flex-grow">
              <div className="flex flex-col max-w-[1500px] bg-black">
                {/* An horizontal time line that we can scroll and expend the evenment we want*/} 
                <Timeline/>
              </div>
            </div>
          </div>
        {/* Main projects */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0  h-full md:sticky top-12 font-Lato">
              Main Projects
            </div>
            <div className="flex-grow">
              <div className="flex flex-col max-w-[1500px]">
                <div className="text-white mb-12 text-xl" style={{ maxWidth: '90%' }}>
                  Here are some of the projects we are currently working on:We are currently working on a number of projects that aim to render this world a better place. We are currently working on a number of projects that aim to render this world a better place. Here are some of the projects we are currently working on:We are currently working on a number of projects that aim to render this world a better place. We are currently working on a number of projects that aim to render this world a better place. 
                  
                </div>
                {/* A carousel on which we can select cards and expend them, here is an example https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/misc/carousel/react?file=/src/App.js */}
                  <CardProjects items={currentProjects} selectedId={mainSelectedId} setSelectedId={setMainSelectedId}/>

              </div>
            </div>
          </div>
        {/* Side projects */}
          <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0  h-full md:sticky top-12 font-Lato">
              Side Projects
            </div>
            <div className="flex-grow break-all">
              <div className="flex flex-col break-all ">
                <div className="text-white break-all mb-12 text-xl" style={{ Width: '90%' }}>
                  We are currently working on a number of side projects that aim to render this world a better place. Here are some of the projects we are currently working on:
                </div>
                {/* A carousel on which we can select cards and expend them, here is an example https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/misc/carousel/react?file=/src/App.js */}
                   <CardProjects items={sideProjects} selectedId={sideSelectedId} setSelectedId={setSideSelectedId} /> 
              </div>
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
                </div>
              </div>
            </div>
          </div>
        {/* Find us */}
          <div className="pt-14 md:pt-28  flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between  mx-auto">
            <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] md:sticky top-12 font-Lato">
              FIND US
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
