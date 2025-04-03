import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeBg from '../assets/images/home-bg.jpg';
import Card from '../components/Card';
import GameIcon1 from '../assets/images/Game Icon.png';
import GameIcon2 from '../assets/images/Game Icon (1).png';
import GameIcon3 from '../assets/images/Game Icon (2).png';
import GameIcon4 from '../assets/images/Game Icon (3).png';


import cardImage1 from '../assets/images/bulletz.png';
import cardImage2 from '../assets/images/image 7.png';
import cardImage3 from '../assets/images/image 8.png';
import cardImage4 from '../assets/images/oneslot.png';
import cardImage5 from '../assets/images/taika.png';
import CasinoCard from '../components/CasinoCard';

import casinocard1 from '../assets/images/wazbee.png';
import casinocard2 from '../assets/images/compeon.png';



const Home = () => {
  useEffect(() => {
      // Change body background color
      document.body.style.backgroundColor = "#1e1e1e"; // Set your desired color
  
      // Cleanup function to revert color when component unmounts
      return () => {
        document.body.style.backgroundColor = null;
      };
    }, []);


  const handlePlayClick = (name) => {
    console.log(`Playing ${name}`);
  };
  // State to track the currently selected section (Casinos, Bonuses, Games)
  const [activeSection, setActiveSection] = useState('casinos');

  // Function to handle button clicks
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar />

      <header className="relative bg-cover bg-center h-[60vh] md:h-screen"
        style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-5xl text-white"
            style={{ fontFamily: 'BigNoodleTitling', lineHeight: '1.2', wordSpacing: '0.1em', fontWeight: '100', letterSpacing: '0.05em' }}>
            FIND THE BEST ONLINE CASINOS & EXCLUSIVE BONUSES!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200"
            style={{ fontFamily: 'BigNoodleTitling', lineHeight: '1.4', wordSpacing: '0.1em', fontWeight: '300', letterSpacing: '0.05em' }}>
            Compare top-rated casinos, claim unbeatable welcome offers, and start playing today!
            We bring you the best deals, so you can focus on winning big.
          </p>
        </div>
      </header>

      <section className="py-10 bg-black text-center">
        <h2 className="text-3xl md:text-5xl mb-8 text-white" style={{ fontFamily: 'BigNoodleTitling', wordSpacing: '0.1em', fontWeight: '300', letterSpacing: '0.05em' }}>
          NEW ON MR GAMBLERS
        </h2>
        <div
          className="inline-flex mb-10 space-x-0 text-bold justify-center w-full"
          style={{
            fontFamily: 'BigNoodleTitling',
            wordSpacing: '0.1em',
            fontWeight: '500',
            letterSpacing: '0.05em',
          }}
        >
          <button
            onClick={() => handleSectionChange('casinos')}
            className={`${activeSection === 'casinos'
              ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
              : 'bg-white text-red-800'
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Casinos
          </button>

          <button
            onClick={() => handleSectionChange('bonuses')}
            className={`${activeSection === 'bonuses'
              ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
              : 'bg-white text-red-800'
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Bonuses
          </button>

          <button
            onClick={() => handleSectionChange('games')}
            className={`${activeSection === 'games'
              ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
              : 'bg-white text-red-800'
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Games
          </button>

        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10">
            {activeSection === 'casinos' && (
              <>
                <Card name="BULLETZ" rating="4.5" bgImage={cardImage1} />
                <Card name="STARS" rating="4.7" bgImage={cardImage2} />
                <Card name="SPINS" rating="4.8" bgImage={cardImage3} />
                <Card name="BULLETZ" rating="4.5" bgImage={cardImage4} />
                <Card name="STARS" rating="4.7" bgImage={cardImage5} />

              </>
            )}

            {activeSection === 'bonuses' && (
              <>
                <Card name="BONUS1" rating="4.9" bgImage={cardImage5} />
                <Card name="BONUS2" rating="4.8" bgImage={cardImage4} />
                <Card name="BONUS3" rating="4.7" bgImage={cardImage3} />
                <Card name="BONUS1" rating="4.9" bgImage={cardImage2} />
                <Card name="BONUS2" rating="4.8" bgImage={cardImage1} />

              </>
            )}

            {activeSection === 'games' && (
              <>
                <Card name="GAME1" rating="4.6" bgImage={cardImage3} />
                <Card name="GAME2" rating="4.5" bgImage={cardImage4} />
                <Card name="GAME3" rating="4.9" bgImage={cardImage5} />
                <Card name="GAME1" rating="4.6" bgImage={cardImage1} />
                <Card name="GAME2" rating="4.5" bgImage={cardImage2} />

              </>
            )}
          </div>
        </div>
      </section>

      <section>
        <div
          className="flex flex-col bg-black items-center justify-center"
          style={{
            fontFamily: 'BigNoodleTitling',
            lineHeight: '1.2',
            wordSpacing: '0.1em',
            fontWeight: '100',
            letterSpacing: '0.05em',
          }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl mt-10 max-w-5xl text-white">ARE YOU IN?</h2>

          <div className="relative mt-6 w-full max-w-4xl ">
            <div className="absolute inset-x-0 -top-4 flex justify-center z-10">
              <p className="relative bg-black text-red-600 m-5 md:text-lg lg:text-2xl text-center px-8 py-2 z-10">
                TABLE GAMING AT MR GAMBLERS
              </p>
            </div>

            <div
              className="absolute inset-0 m-5 border-4 border-red-600 rounded-xl"
              style={{
                boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5), inset 0 0 15px rgba(255, 0, 0, 0.3)',
              }}
            ></div>

            <div className="flex flex-wrap justify-around m-10  items-center py-8 px-6 bg-black">
              <div className="text-center text-gray-400 mb-4  md:mb-0">
                <div
                  className="mb-0 w-20 h-20"
                  style={{
                    backgroundImage: `url(${GameIcon1})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '120px',
                    height: '120px',
                  }}
                ></div>
                <span>POKER</span>
              </div>

              <div className="text-center text-gray-400 mb-4 md:mb-0">
                <div
                  className="mb-2 w-20 h-20"
                  style={{
                    backgroundImage: `url(${GameIcon2})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '120px',
                    height: '120px',
                  }}
                ></div>
                <span>PURE 21.5 BLACKJACK</span>
              </div>

              <div className="text-center text-gray-400 mb-4 md:mb-0">
                <div
                  className="mb-2 w-20 h-20"
                  style={{
                    backgroundImage: `url(${GameIcon3})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '120px',
                    height: '120px',
                  }}
                ></div>
                <span>BACCARAT</span>
              </div>

              <div className="text-center text-gray-400 mb-4 md:mb-0">
                <div
                  className="mb-2 w-20 h-20"
                  style={{
                    backgroundImage: `url(${GameIcon4})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '120px',
                    height: '120px',
                  }}
                ></div>
                <span>AKA PAI GOW POKER</span>
              </div>

              <div className="text-center text-gray-400">
                <div
                  className="mb-2 w-20 h-20"
                  style={{
                    backgroundImage: `url(${GameIcon1})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '120px',
                    height: '120px',
                  }}
                ></div>
                <span>PAI GOW TILES</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col bg-black items-center justify-center">
        <div
          className="flex flex-col bg-black items-center justify-center"
          style={{
            fontFamily: 'BigNoodleTitling',
            lineHeight: '1.2',
            wordSpacing: '0.1em',
            fontWeight: '100',
            letterSpacing: '0.05em',
          }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl mt-20 max-w-5xl text-white">All In One Casinos</h2>
        </div>

        <div className="container m-10 mx-auto px-4">
      <CasinoCard
        image={casinocard1} // Pass the image path here
        title="WazBee"
        depositBonus="Up to 1000 € cash bonus + 25 ik"
        welcomeBonus="32 Free spins"
        rating="4.8"
        visits="4,938"
      />
      <CasinoCard
        image={casinocard2} // Pass the second image path here
        title="CampeónBet"
        depositBonus="Up to 1000 € cash bonus + 25 ik"
        welcomeBonus="32 Free spins"
        rating="3.8"
        visits="4,938"
      />
    </div>
      </section>

      <Footer />

    </>
  );
};

export default Home;
