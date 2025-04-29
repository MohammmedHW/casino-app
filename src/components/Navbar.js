import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const getActiveClass = (path) =>
    location.pathname === path ? 'text-red-600' : 'hover:text-red-600';

  const menuItems = [
    { name: 'Home', path: '/', submenu: [] },
    {
      name: 'Casinos',
      path: '/casinos',
      submenu: [
        { name: 'Crypto Casino', path: '/casinos/crypto' },
        { name: 'Online Casino', path: '/casinos/online' },
        { name: 'Certified Casino', path: '/casinos/certified' },
        { name: 'Mobile Casino', path: '/casinos/mobile' },
        { name: 'Newest Casino', path: '/casinos/newest' },
      ],
    },
    {
      name: 'Bonuses',
      path: '/bonuses',
      submenu: [
        { name: 'Latest Bonus', path: '/bonuses/latest' },
        { name: 'Exclusive Bonus', path: '/bonuses/exclusive' },
        { name: 'Welcome Bonus', path: '/bonuses/welcome' },
        { name: 'No Deposit', path: '/bonuses/no-deposit' },
        { name: 'Free Spins Bonus', path: '/bonuses/free-spins' },
        { name: 'Cashback Bonus', path: '/bonuses/cashback' },
        { name: 'No Wagering Bonus', path: '/bonuses/no-wagering' },
      ],
    },
    {
      name: 'Games',
      path: '/games',
      submenu: [
        { name: 'Casino Games', path: '/games/casino' },
        { name: 'Table Games', path: '/games/table' },
        { name: 'Card Games', path: '/games/card' },
        { name: 'Dice Games', path: '/games/dice' },
        { name: 'Real Money Online Slots', path: '/games/real-money-slots' },
        { name: 'Poker', path: '/games/poker' },
        { name: 'Bingo', path: '/games/bingo' },
        { name: 'Lottery Games', path: '/games/lottery' },
      ],
    },
    {
      name: 'Slots',
      path: '/slots',
      submenu: [
        { name: 'Video', path: '/slots/video' },
        { name: 'Classic Slots', path: '/slots/classic' },
        { name: 'Progressive Slots', path: '/slots/progressive' },
        { name: 'New Slots', path: '/slots/new' },
      ],
    },
    {
      name: 'Betting',
      path: '/betting',
      submenu: [
        { name: 'Sports Betting', path: '/betting/sports' },
        { name: 'New Betting Sites', path: '/betting/new-sites' },
        { name: 'Bet Types', path: '/betting/types' },
        { name: 'Betting Bonuses', path: '/betting/bonuses' },
        { name: 'Free Bets', path: '/betting/free-bets' },
      ],
    },
    { name: 'About Us', path: '/about-us', submenu: [] },
  ];

  const handleMouseEnter = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveMenuIndex(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenuIndex(null);
    }, 200); // 200ms delay before closing
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-black bg-opacity-70 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl ml-10" style={{ fontFamily: 'BigNoodleTitling', letterSpacing: '0.1em' }}>
          MR GAMBLERS
        </div>

        <div
          className="hidden md:flex mr-10 space-x-8 text-xl relative"
          style={{ fontFamily: 'BigNoodleTitling', letterSpacing: '0.08em' }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.path} className={`block ${getActiveClass(item.path)} px-2`}>
                {item.name}
              </Link>

              {item.submenu.length > 0 && (
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 ease-in-out ${
                    activeMenuIndex === idx ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div
                    className="bg-black text-white rounded shadow-lg z-50 w-64 border border-gray-700"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className="block px-6 py-3 hover:bg-red-600 transition duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;