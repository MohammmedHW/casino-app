import React from 'react';
import footerbg from '../assets/images/footer-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center py-10" style={{ backgroundImage: `url(${footerbg})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-white space-y-6 lg:space-y-0 relative">

       
        <div className="w-full lg:w-auto text-center ml-0 sm:ml-0 lg:ml-10 lg:text-left" style={{
          fontFamily: 'BigNoodleTitling',
          lineHeight: '1.3',
          wordSpacing: '0.1em',
          fontWeight: '300',
          letterSpacing: '0.2em',
        }}>
          <h2 className="text-3xl md:text-3xl lg:text-7xl mt-10 max-w-5xl text-white">MR GAMBLERS</h2>
          <p className="text-lg md:text-xl">SUBSCRIBE TO OUR NEWSLETTER</p>

          <form className="mt-10 space-y-3 w-full max-w-xs mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white bg-opacity-20 py-3 px-4 rounded-md text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full bg-white bg-opacity-20 py-3 px-4 rounded-md text-white placeholder-white focus:outline-none"
            />
            <button className="w-full bg-red-600 hover:bg-red-500 text-white py-3 px-6 rounded-md">
              SUBSCRIBE
            </button>
          </form>
        </div>

       
        <div className="w-full lg:w-auto text-center mr-0 sm:mr-0 lg:mr-10 lg:text-right flex  flex-col items-center lg:items-end lg:absolute lg:bottom-0 lg:right-10 space-y-6 lg:space-y-0 mt-10 pt-10 lg:mt-0">
          <div className="text-sm flex flex-col items-center lg:items-end space-y-4">
            <a href="#" className="hover:text-gray-300 border-b">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 border-b">Terms & Conditions</a>
          </div>

          <div className="flex justify-center lg:justify-end space-x-8 text-xl md:text-2xl lg:text-4xl pt-10 mt-10">
            <a href="#" className="text-white hover:opacity-80">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
