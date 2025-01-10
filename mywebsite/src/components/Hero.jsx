import React from 'react';
import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';

// Social Media Links
const socialLinks = [
  { id: 'facebook', img: facebook, url: 'https://www.facebook.com/ShihabUDDINkhan372' },
  { id: 'instagram', img: instagram, url: 'https://instagram.com' },
  { id: 'twitter', img: twitter, url: 'https://twitter.com' },
  { id: 'linkedin', img: linkedin, url: 'https://www.linkedin.com/in/shihab-uddin-khan/' },
];

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          {/* Hero Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Shihab <span className="text-red-500">Khan</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love
              creating beautiful and functional websites that solve real-world problems.
            </p>
            {/* Download CV Button */}
            <button className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-gray-800 transition">
              <a href="/Shihab_Khan_CV.pdf" download>Download CV</a>
            </button>
          </div>

          {/* Hero Image Section */}
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="Shihab Khan Hero" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              className="absolute w-10 right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.img} alt={link.id} className="w-20" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
