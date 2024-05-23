import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faBootstrap, faCss3Alt, faDocker } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Hero.css'
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className={`dark:bg-gray-900 py-12 lg:pt-56 ${isVisible ? 'animate-hero' : ''}`}>
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">Stephen Njuguna Njambi</h1>
          <h2 className='text-xl'>Hi there | I am a Software Engineer!</h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions.</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" style={{background: 'linear-gradient(90deg, #a993fe 0%, #7e61ef 100%)'}}>
            Get Intouch
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" style={{background: 'linear-gradient(90deg, #d1d5db 0%, #a0aec0 100%)'}}>
            My Projects
          </a>
        </div>
        
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col justify-center items-center">
          <div className="flex justify-center items-center rounded-full overflow-hidden border border-white w-68 h-46 mb-4 img-container">
            <img src="https://cdn.pixabay.com/photo/2023/02/24/00/41/ai-generated-7809880_640.jpg" alt="Passport" className="max-w-full h-auto" />
          </div>


          <div className="flex justify-between w-full">
            <FontAwesomeIcon icon={faReact} size="2x" className="icon" style={{ color: '#61DAFB' }} />
            <FontAwesomeIcon icon={faBootstrap} size="2x" className="icon" style={{ color: '#563D7C' }} />
            <FontAwesomeIcon icon={faCss3Alt} size="2x" className="icon" style={{ color: '#1572B6' }} />
            <FontAwesomeIcon icon={faDocker} size="2x" className="icon" style={{ color: '#2496ED' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
