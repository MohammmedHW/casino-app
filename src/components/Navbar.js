import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Use the router's location hook

  const getActiveClass = (path) => {
    return location.pathname === path ? 'text-red-600' : 'hover:text-red-600';
  };

  return (
    <nav className="bg-black bg-opacity-70 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl ml-10" style={{ fontFamily: 'BigNoodleTitling', letterSpacing: '0.1em' }}>MR GAMBLERS</div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex mr-10 space-x-8 hidden text-xl md:block`} style={{ fontFamily: 'BigNoodleTitling', letterSpacing: '0.08em' }}>
          <Link to="/" className={getActiveClass("/")}>Home</Link>
          <Link to="/casinos" className={getActiveClass("/casinos")}>Casinos</Link>
          <Link to="/bonuses" className={getActiveClass("/bonuses")}>Bonuses</Link>
          <Link to="/games" className={getActiveClass("/games")}>Games</Link>
          <Link to="/about-us" className={getActiveClass("/about-us")}>About Us</Link>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 absolute top-14 left-0 w-full bg-black p-4">
            <Link to="/" className={getActiveClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/casinos" className={getActiveClass("/casinos")} onClick={() => setIsOpen(false)}>Casinos</Link>
            <Link to="/bonuses" className={getActiveClass("/bonuses")} onClick={() => setIsOpen(false)}>Bonuses</Link>
            <Link to="/games" className={getActiveClass("/games")} onClick={() => setIsOpen(false)}>Games</Link>
            <Link to="/about-us" className={getActiveClass("/about-us")} onClick={() => setIsOpen(false)}>About Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
