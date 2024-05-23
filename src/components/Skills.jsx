import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faBootstrap, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons';
import "../assets/css/Skills.css";

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
    <section id="skills" className="container mx-auto py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Skill Cards */}
        <div className="bg-darkBlue rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Languages & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <SkillCard icon={faReact} color="text-blue-400" title="React" />
            <SkillCard icon={faJs} color="text-yellow-500" title="JavaScript" />
            <SkillCard icon={faBootstrap} color="text-purple-600" title="Bootstrap" />
            <SkillCard icon={faDocker} color="text-blue-500" title="Docker" />
            <SkillCard icon={faLinux} color="text-green-600" title="Linux" />
          </div>
        </div>
        {/* Right Section - Text */}
        <div className={`md:relative ${isVisible ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-10'} md:transition-all md:duration-500 md:ease-in-out`}>
          <div className=" md:absolute inset-0 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Do you have sometime?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium vehicula nunc, a hendrerit justo venenatis at. Nam rutrum vulputate est nec consectetur.</p>
            <div className="flex justify-center mt-8">
              <button className="px-6 py-3 linear-gradient-button   text-white-800 font-semibold rounded-md shadow-md transition duration-300 hover:bg-yellow-500 hover:text-white focus:outline-none">
                Visit My Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, color, title }) => {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1">
      <FontAwesomeIcon icon={icon} className={`text-3xl ${color}`} />
      <p className="text-sm font-medium mt-2 text-center">{title}</p>
    </div>
  );
};

export default Skills;
