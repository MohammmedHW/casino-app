import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import bonusesBg from '../assets/images/bonuses-bg.png';
import SearchBox from '../components/searchbox';
import Card from '../components/Card';
import cardImage1 from '../assets/images/bulletz.png';
import cardImage2 from '../assets/images/image 7.png';
import cardImage3 from '../assets/images/image 8.png';
import cardImage4 from '../assets/images/oneslot.png';
import cardImage5 from '../assets/images/taika.png';
import CategoryCard from '../components/CategoryCard';
import ExpertCard from '../components/ExpertCard';

import categoriesImg1 from '../assets/images/image15.png';
import categoriesImg2 from '../assets/images/image 16.png';
import categoriesImg3 from '../assets/images/image 17.png';
import categoriesImg4 from '../assets/images/image 18.png';
import categoriesImg5 from '../assets/images/image 19.png';
import categoriesImg6 from '../assets/images/image 20.png';


import Expert1 from '../assets/images/expert1.png';
import Expert2 from '../assets/images/expert2.png';
import Expert3 from '../assets/images/expert3.png';
import Expert4 from '../assets/images/expert4.png';
import Expert5 from '../assets/images/expert5.png';
import Expert6 from '../assets/images/expert6.png';


import certified from '../assets/images/Certified.png';
import Footer from "../components/Footer";


const Bonuses = () => {
  useEffect(() => {
    // Change body background color
    document.body.style.backgroundColor = "#1e1e1e"; // Set your desired color

    // Cleanup function to revert color when component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const categories = [
    { icon: categoriesImg1, label: 'Casino Review' },
    { icon: categoriesImg2, label: 'Newest Casino' },
    { icon: categoriesImg3, label: 'Video Reviews' },
    { icon: categoriesImg4, label: 'Awarded Casinos' },
    { icon: categoriesImg5, label: 'Mobile Casinos' },
    { icon: categoriesImg6, label: 'Instant Play' },
  ];

  const recommendedCasinos = [
    { logo: Expert1, name: 'Winnerz Casino' },
    { logo: Expert2, name: 'WazBee Casino' },
    { logo: Expert3, name: 'Spirit Casino' },
    { logo: Expert4, name: 'RoySpins Casino' },
    { logo: Expert5, name: 'Vavada Casino' },
    { logo: Expert6, name: 'Wintopia Casino' },

  ];

  return (
    <>
      <Navbar />

      <header
        className="relative bg-cover bg-center h-[60vh] md:h-screen"
        style={{ backgroundImage: `url(${bonusesBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black100 to-transparent"></div>

        <div className="container mx-auto text-center absolute z-10 top-20 h-full flex flex-col justify-center items-center px-2">

          <div className="m-10">
            <SearchBox />
          </div>
        </div>
      </header>



      <section
        className="relative bg-black100 text-center py-12 overflow-hidden"
      >




        <div className="relative z-10">
          <h2
            className="text-3xl font-bold text-white mb-6 text-2xl md:text-4xl lg:text-6xl text-white"
            style={{
              fontFamily: "BigNoodleTitling",
              lineHeight: "1.2",
              wordSpacing: "0.1em",
              fontWeight: "100",
              letterSpacing: "0.05em",
            }}
          >
            HOT CASINO CATEGORIES
          </h2>

          <div className="flex justify-center mb-10 rounded-2xl mx-auto max-w-[900px] p-10 bg-green-800 sm:mx-6 mx-8 lg:mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {categories.map((category, index) => (
                <CategoryCard key={index} icon={category.icon} label={category.label} />
              ))}
            </div>
          </div>


          <div className="flex  mt-10 flex-col items-center ">
            <div
              className="relative text-white p-10 w-full max-w-full"
              style={{
                background: "linear-gradient(to right, #1A008E, #070028)",
              }}
            >
              <div className="flex flex-row sm:flex-row justify-center items-center text-center mb-10">
                <img src={certified} alt="Certified" className="w-12 h-12 sm:w-24 sm:h-24 sm:mr-4 mb-4 sm:mb-4" />
                <h2 className="text-3xl font-bold text-white mb-6 text-2xl md:text-4xl lg:text-5xl text-white" style={{
                  fontFamily: 'BigNoodleTitling',
                  lineHeight: '1.2',
                  wordSpacing: '0.1em',
                  fontWeight: '100',
                  letterSpacing: '0.05em',
                }}>Certified Casinos</h2>
              </div>

              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-10 mt-5">
                  <Card name="BULLETZ" rating="4.5" bgImage={cardImage1} />
                  <Card name="STARS" rating="4.7" bgImage={cardImage2} />
                  <Card name="SPINS" rating="4.8" bgImage={cardImage3} />
                  <Card name="BULLETZ" rating="4.5" bgImage={cardImage4} />

                </div>
              </div>
            </div>

          </div>


          <h2
            className="text-3xl font-bold text-white mb-10 mt-40 text-2xl md:text-3xl lg:text-4xl text-white"
            style={{
              fontFamily: "BigNoodleTitling",
              lineHeight: "1.2",
              wordSpacing: "0.1em",
              fontWeight: "100",
              letterSpacing: "0.05em",
            }}
          >
            RECOMMENDED BY OUR EXPERTS
          </h2>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {recommendedCasinos.map((casino, index) => (
                <ExpertCard key={index} logo={casino.logo} name={casino.name} />
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 bg-black100 text-center">
        <div className="flex  flex-col items-center ">
          <div
            className="relative text-white bg-black100 p-10 w-full max-w-full"

          >
            <div className="flex flex-row sm:flex-row justify-center items-center text-center mb-10">

              <h2 className="text-3xl font-bold text-white mb-6 text-2xl md:text-4xl lg:text-5xl text-white" style={{
                fontFamily: 'BigNoodleTitling',
                lineHeight: '1.2',
                wordSpacing: '0.1em',
                fontWeight: '100',
                letterSpacing: '0.05em',
              }}>Recently Added on MR Gamblers</h2>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10 mt-5">
                <Card name="BULLETZ" rating="4.5" bgImage={cardImage1} />
                <Card name="STARS" rating="4.7" bgImage={cardImage2} />
                <Card name="SPINS" rating="4.8" bgImage={cardImage3} />
                <Card name="BULLETZ" rating="4.5" bgImage={cardImage4} />
                <Card name="STARS" rating="4.7" bgImage={cardImage5} />

              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />

    </>
  );
};

export default Bonuses;
