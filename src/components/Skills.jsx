import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faBootstrap, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        setIsVisible(sectionTop < window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="skills"
      className={`px-4 py-8 mx-auto my-8 md:px-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ maxWidth: '800px' }} // Adjust the maximum width of the section
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <SkillCard icon={faReact} color="text-blue-400" title="React" />
        <SkillCard icon={faJs} color="text-yellow-500" title="JavaScript" />
        <SkillCard icon={faBootstrap} color="text-purple-600" title="Bootstrap" />
        <SkillCard icon={faDocker} color="text-blue-500" title="Docker" />
        <SkillCard icon={faLinux} color="text-green-600" title="Linux" />
      </div>
      <div className="mt-8 flex justify-center">
        <p className="text-lg text-gray-600">Do you have sometime ? </p>
        <a href='https://github.com/StephenNjambi' className="ml-4 px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-md shadow-md transition duration-300 hover:bg-yellow-500 hover:text-white focus:outline-none">
          Visit My Github
        </a>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, color, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
      <FontAwesomeIcon icon={icon} className={`text-3xl ${color}`} />
      <p className="text-sm font-medium mt-2">{title}</p>
    </div>
  );
};

export default Skills;
