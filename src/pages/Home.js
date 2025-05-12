// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import homeBg from '../assets/images/home-bg.jpg';
// import Card from '../components/Card';
// import GameIcon1 from '../assets/images/Game Icon.png';
// import GameIcon2 from '../assets/images/Game Icon (1).png';
// import GameIcon3 from '../assets/images/Game Icon (2).png';
// import GameIcon4 from '../assets/images/Game Icon (3).png';

// import cardImage1 from '../assets/images/bulletz.png';
// import cardImage2 from '../assets/images/image 7.png';
// import cardImage3 from '../assets/images/image 8.png';
// import cardImage4 from '../assets/images/oneslot.png';
// import cardImage5 from '../assets/images/taika.png';
// import CasinoCard from '../components/CasinoCard';

// import casinocard1 from '../assets/images/wazbee.png';
// import casinocard2 from '../assets/images/compeon.png';

// const Home = () => {
//   useEffect(() => {
//       // Change body background color
//       document.body.style.backgroundColor = "#1e1e1e"; // Set your desired color

//       // Cleanup function to revert color when component unmounts
//       return () => {
//         document.body.style.backgroundColor = null;
//       };
//     }, []);

//   const handlePlayClick = (name) => {
//     console.log(`Playing ${name}`);
//   };
//   // State to track the currently selected section (Casinos, Bonuses, Games)
//   const [activeSection, setActiveSection] = useState('casinos');

//   // Function to handle button clicks
//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <>
//       <Navbar />

//       <header className="relative bg-cover bg-center h-[60vh] md:h-screen"
//         style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

//         <div className="absolute inset-0 bg-black bg-opacity-5"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

//         <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-center items-center px-4">
//           <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-5xl text-white"
//             style={{ fontFamily: 'BigNoodleTitling', lineHeight: '1.2', wordSpacing: '0.1em', fontWeight: '100', letterSpacing: '0.05em' }}>
//             FIND THE BEST ONLINE CASINOS & EXCLUSIVE BONUSES!
//           </h1>
//           <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200"
//             style={{ fontFamily: 'BigNoodleTitling', lineHeight: '1.4', wordSpacing: '0.1em', fontWeight: '300', letterSpacing: '0.05em' }}>
//             Compare top-rated casinos, claim unbeatable welcome offers, and start playing today!
//             We bring you the best deals, so you can focus on winning big.
//           </p>
//         </div>
//       </header>

//       <section className="py-10 bg-black text-center">
//         <h2 className="text-3xl md:text-5xl mb-8 text-white" style={{ fontFamily: 'BigNoodleTitling', wordSpacing: '0.1em', fontWeight: '300', letterSpacing: '0.05em' }}>
//           NEW ON MR GAMBLERS
//         </h2>
//         <div
//           className="inline-flex mb-10 space-x-0 text-bold justify-center w-full"
//           style={{
//             fontFamily: 'BigNoodleTitling',
//             wordSpacing: '0.1em',
//             fontWeight: '500',
//             letterSpacing: '0.05em',
//           }}
//         >
//           <button
//             onClick={() => handleSectionChange('casinos')}
//             className={`${activeSection === 'casinos'
//               ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
//               : 'bg-white text-red-800'
//               } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
//           >
//             Casinos
//           </button>

//           <button
//             onClick={() => handleSectionChange('bonuses')}
//             className={`${activeSection === 'bonuses'
//               ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
//               : 'bg-white text-red-800'
//               } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
//           >
//             Bonuses
//           </button>

//           <button
//             onClick={() => handleSectionChange('games')}
//             className={`${activeSection === 'games'
//               ? 'bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16'
//               : 'bg-white text-red-800'
//               } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
//           >
//             Games
//           </button>

//         </div>

//         <div className="flex justify-center items-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10">
//             {activeSection === 'casinos' && (
//               <>
//                 <Card name="BULLETZ" rating="4.5" bgImage={cardImage1} />
//                 <Card name="STARS" rating="4.7" bgImage={cardImage2} />
//                 <Card name="SPINS" rating="4.8" bgImage={cardImage3} />
//                 <Card name="BULLETZ" rating="4.5" bgImage={cardImage4} />
//                 <Card name="STARS" rating="4.7" bgImage={cardImage5} />

//               </>
//             )}

//             {activeSection === 'bonuses' && (
//               <>
//                 <Card name="BONUS1" rating="4.9" bgImage={cardImage5} />
//                 <Card name="BONUS2" rating="4.8" bgImage={cardImage4} />
//                 <Card name="BONUS3" rating="4.7" bgImage={cardImage3} />
//                 <Card name="BONUS1" rating="4.9" bgImage={cardImage2} />
//                 <Card name="BONUS2" rating="4.8" bgImage={cardImage1} />

//               </>
//             )}

//             {activeSection === 'games' && (
//               <>
//                 <Card name="GAME1" rating="4.6" bgImage={cardImage3} />
//                 <Card name="GAME2" rating="4.5" bgImage={cardImage4} />
//                 <Card name="GAME3" rating="4.9" bgImage={cardImage5} />
//                 <Card name="GAME1" rating="4.6" bgImage={cardImage1} />
//                 <Card name="GAME2" rating="4.5" bgImage={cardImage2} />

//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       <section>
//         <div
//           className="flex flex-col bg-black items-center justify-center"
//           style={{
//             fontFamily: 'BigNoodleTitling',
//             lineHeight: '1.2',
//             wordSpacing: '0.1em',
//             fontWeight: '100',
//             letterSpacing: '0.05em',
//           }}
//         >
//           <h2 className="text-3xl md:text-3xl lg:text-5xl mt-10 max-w-5xl text-white">ARE YOU IN?</h2>

//           <div className="relative mt-6 w-full max-w-4xl ">
//             <div className="absolute inset-x-0 -top-4 flex justify-center z-10">
//               <p className="relative bg-black text-red-600 m-5 md:text-lg lg:text-2xl text-center px-8 py-2 z-10">
//                 TABLE GAMING AT MR GAMBLERS
//               </p>
//             </div>

//             <div
//               className="absolute inset-0 m-5 border-4 border-red-600 rounded-xl"
//               style={{
//                 boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5), inset 0 0 15px rgba(255, 0, 0, 0.3)',
//               }}
//             ></div>

//             <div className="flex flex-wrap justify-around m-10  items-center py-8 px-6 bg-black">
//               <div className="text-center text-gray-400 mb-4  md:mb-0">
//                 <div
//                   className="mb-0 w-20 h-20"
//                   style={{
//                     backgroundImage: `url(${GameIcon1})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     width: '120px',
//                     height: '120px',
//                   }}
//                 ></div>
//                 <span>POKER</span>
//               </div>

//               <div className="text-center text-gray-400 mb-4 md:mb-0">
//                 <div
//                   className="mb-2 w-20 h-20"
//                   style={{
//                     backgroundImage: `url(${GameIcon2})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     width: '120px',
//                     height: '120px',
//                   }}
//                 ></div>
//                 <span>PURE 21.5 BLACKJACK</span>
//               </div>

//               <div className="text-center text-gray-400 mb-4 md:mb-0">
//                 <div
//                   className="mb-2 w-20 h-20"
//                   style={{
//                     backgroundImage: `url(${GameIcon3})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     width: '120px',
//                     height: '120px',
//                   }}
//                 ></div>
//                 <span>BACCARAT</span>
//               </div>

//               <div className="text-center text-gray-400 mb-4 md:mb-0">
//                 <div
//                   className="mb-2 w-20 h-20"
//                   style={{
//                     backgroundImage: `url(${GameIcon4})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     width: '120px',
//                     height: '120px',
//                   }}
//                 ></div>
//                 <span>AKA PAI GOW POKER</span>
//               </div>

//               <div className="text-center text-gray-400">
//                 <div
//                   className="mb-2 w-20 h-20"
//                   style={{
//                     backgroundImage: `url(${GameIcon1})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     width: '120px',
//                     height: '120px',
//                   }}
//                 ></div>
//                 <span>PAI GOW TILES</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="flex flex-col bg-black items-center justify-center">
//         <div
//           className="flex flex-col bg-black items-center justify-center"
//           style={{
//             fontFamily: 'BigNoodleTitling',
//             lineHeight: '1.2',
//             wordSpacing: '0.1em',
//             fontWeight: '100',
//             letterSpacing: '0.05em',
//           }}
//         >
//           <h2 className="text-3xl md:text-3xl lg:text-5xl mt-20 max-w-5xl text-white">All In One Casinos</h2>
//         </div>

//         <div className="container m-10 mx-auto px-4">
//       <CasinoCard
//         image={casinocard1} // Pass the image path here
//         title="WazBee"
//         depositBonus="Up to 1000 € cash bonus + 25 ik"
//         welcomeBonus="32 Free spins"
//         rating="4.8"
//         visits="4,938"
//       />
//       <CasinoCard
//         image={casinocard2} // Pass the second image path here
//         title="CampeónBet"
//         depositBonus="Up to 1000 € cash bonus + 25 ik"
//         welcomeBonus="32 Free spins"
//         rating="3.8"
//         visits="4,938"
//       />
//     </div>
//       </section>

//       <Footer />

//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import homeBg from "../assets/images/home-bg.jpg";
import SearchBox from "../components/searchbox";
import Card from "../components/Card";
import CasinoCard from "../components/CasinoCard";
import CategoryCard from "../components/CategoryCard";
import ExpertCard from "../components/ExpertCard";
import { getCasinos } from "../api/casinos.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import images
import GameIcon1 from "../assets/images/Game Icon.png";
import GameIcon2 from "../assets/images/Game Icon (1).png";
import GameIcon3 from "../assets/images/Game Icon (2).png";
import GameIcon4 from "../assets/images/Game Icon (3).png";
import certified from "../assets/images/Certified.png";
import leftCircle from "../assets/images/lefteclipse.png";
import rightCircle from "../assets/images/righteclipse.png";

// Expert logos
import Expert1 from "../assets/images/expert1.png";
import Expert2 from "../assets/images/expert2.png";
import Expert3 from "../assets/images/expert3.png";
import Expert4 from "../assets/images/expert4.png";
import Expert5 from "../assets/images/expert5.png";
import Expert6 from "../assets/images/expert6.png";

// Category images
import categoriesImg1 from "../assets/images/image15.png";
import categoriesImg2 from "../assets/images/image 16.png";
import categoriesImg3 from "../assets/images/image 17.png";
import categoriesImg4 from "../assets/images/image 18.png";
import categoriesImg5 from "../assets/images/image 19.png";
import categoriesImg6 from "../assets/images/image 20.png";

const Home = () => {
  const navigate = useNavigate();
  const [casinos, setCasinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("casinos");


  useEffect(() => {
    // Change body background color
    document.body.style.backgroundColor = "#1e1e1e";

    // Fetch casinos from backend
    const fetchCasinos = async () => {
      try {
        const data = await getCasinos();
        setCasinos(data);
      } catch (err) {
        setError(err.message || "Failed to load casinos");
      } finally {
        setLoading(false);
      }
    };

    fetchCasinos();

    // Cleanup function
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const categories = [
    { icon: categoriesImg1, label: "Casino Review" },
    { icon: categoriesImg2, label: "Newest Casino" },
    { icon: categoriesImg3, label: "Video Reviews" },
    { icon: categoriesImg4, label: "Awarded Casinos" },
    { icon: categoriesImg5, label: "Mobile Casinos" },
    { icon: categoriesImg6, label: "Instant Play" },
  ];

  const recommendedCasinos = [
    { logo: Expert1, name: "Winnerz Casino" },
    { logo: Expert2, name: "WazBee Casino" },
    { logo: Expert3, name: "Spirit Casino" },
    { logo: Expert4, name: "RoySpins Casino" },
    { logo: Expert5, name: "Vavada Casino" },
    { logo: Expert6, name: "Wintopia Casino" },
  ];

  const handlePlayClick = (name) => {
    navigate(`/casinos/${name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const casinosPerPage = 5;
  const totalPages = Math.ceil(casinos.length / casinosPerPage);
  const indexOfLastCasino = currentPage * casinosPerPage;
  const indexOfFirstCasino = indexOfLastCasino - casinosPerPage;
  const currentCasinos = casinos.slice(indexOfFirstCasino, indexOfLastCasino);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black100">
        <div className="text-white text-2xl">Loading casinos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-black100">
        <div className="text-red-500 text-2xl">{error}</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <header
        className="relative bg-cover bg-center h-[60vh] md:h-screen"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black100 to-transparent"></div>

        <div className="container mx-auto text-center absolute z-10 top-5 h-full flex flex-col justify-center items-center px-2">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl max-w-4xl text-white"
            style={{
              fontFamily: "BigNoodleTitling",
              lineHeight: "1.2",
              wordSpacing: "0.1em",
              fontWeight: "100",
              letterSpacing: "0.05em",
            }}
          >
            Your Gateway to the Best Online Casinos & Big Wins!
          </h1>
          <p
            className="mt-4 text-md md:text-lg max-w-2xl text-gray-200"
            style={{
              fontFamily: "BigNoodleTitling",
              lineHeight: "1.4",
              wordSpacing: "0.1em",
              fontWeight: "300",
              letterSpacing: "0.05em",
            }}
          >
            Compare top-rated casino platforms, claim exclusive bonuses, and
            start playing today!
          </p>
          <div className="m-10">
            <SearchBox />
          </div>
        </div>
      </header>

      <section className="py-10 bg-black100 text-center">
        <h2
          className="text-3xl md:text-5xl mb-8 text-white"
          style={{
            fontFamily: "BigNoodleTitling",
            wordSpacing: "0.1em",
            fontWeight: "300",
            letterSpacing: "0.05em",
          }}
        >
          NEW ON MR GAMBLERS
        </h2>

        <div
          className="inline-flex mb-10 space-x-0 text-bold justify-center w-full"
          style={{
            fontFamily: "BigNoodleTitling",
            wordSpacing: "0.1em",
            fontWeight: "500",
            letterSpacing: "0.05em",
          }}
        >
          <button
            onClick={() => handleSectionChange("casinos")}
            className={`${activeSection === "casinos"
              ? "bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16"
              : "bg-white text-red-800"
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Casinos
          </button>

          <button
            onClick={() => handleSectionChange("bonuses")}
            className={`${activeSection === "bonuses"
              ? "bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16"
              : "bg-white text-red-800"
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Bonuses
          </button>

          <button
            onClick={() => handleSectionChange("games")}
            className={`${activeSection === "games"
              ? "bg-gradient-to-r from-red-500 to-red-700 text-white scale-125 py-4 px-8 sm:px-16"
              : "bg-white text-red-800"
              } py-3 px-6 sm:px-14 text-xl sm:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-125 hover:py-4 hover:px-8 sm:hover:px-16 transition-all duration-300 ease-in-out`}
          >
            Games
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10">
            {activeSection === "casinos" &&
              casinos
                .slice(0, 5)
                .map((casino) => (
                  <Card
                    key={casino._id}
                    name={casino.name}
                    rating={casino.rating}
                    bgImage={casino.logo}
                    onClick={() => handlePlayClick(casino.name)}
                  />
                ))}

            {activeSection === "bonuses" &&
              casinos.slice(0, 5).map((casino) => (
                <Card
                  key={casino._id}
                  name={`${casino.name} Bonus`}
                  rating={casino.rating + 0.2} // Slightly higher for bonuses
                  bgImage={casino.logo}
                  onClick={() => handlePlayClick(casino.name)}
                />
              ))}

            {activeSection === "games" &&
              casinos.slice(0, 5).map((casino, index) => (
                <Card
                  key={casino._id}
                  name={`${casino.name} Games`}
                  rating={4.5 + index * 0.1} // Consistent game ratings
                  bgImage={casino.logo}
                  onClick={() => handlePlayClick(casino.name)}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black100 text-center py-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${leftCircle}), url(${rightCircle})`,
            backgroundPosition: "0 100%, 100% 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "800px 600px, 800px 600px",
          }}
        ></div>

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
                <CategoryCard
                  key={index}
                  icon={category.icon}
                  label={category.label}
                />
              ))}
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
        <div className="flex mt-10 flex-col items-center">
          <div
            className="relative text-white p-10 w-full max-w-full"
            style={{
              background: "linear-gradient(to right, #1A008E, #070028)",
            }}
          >
            <div className="flex flex-row sm:flex-row justify-center items-center text-center mb-10">
              <img
                src={certified}
                alt="Certified"
                className="w-12 h-12 sm:w-24 sm:h-24 sm:mr-4 mb-4 sm:mb-4"
              />
              <h2
                className="text-3xl font-bold text-white mb-6 text-2xl md:text-4xl lg:text-5xl text-white"
                style={{
                  fontFamily: "BigNoodleTitling",
                  lineHeight: "1.2",
                  wordSpacing: "0.1em",
                  fontWeight: "100",
                  letterSpacing: "0.05em",
                }}
              >
                Certified Casinos
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-10 mt-5">
                {casinos.slice(0, 4).map((casino) => (
                  <Card
                    key={casino._id}
                    name={casino.name}
                    rating={casino.rating}
                    bgImage={casino.logo}
                    onClick={() => handlePlayClick(casino.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-black100 text-center">
        <div className="flex flex-col items-center">
          <div className="relative text-white bg-black100 p-10 w-full max-w-full">
            <div className="flex flex-row sm:flex-row justify-center items-center text-center mb-10">
              <h2
                className="text-3xl font-bold text-white mb-6 text-2xl md:text-4xl lg:text-5xl text-white"
                style={{
                  fontFamily: "BigNoodleTitling",
                  lineHeight: "1.2",
                  wordSpacing: "0.1em",
                  fontWeight: "100",
                  letterSpacing: "0.05em",
                }}
              >
                Recently Added on MR Gamblers
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10 mt-5">
                {casinos.slice(0, 5).map((casino) => (
                  <Card
                    key={casino._id}
                    name={casino.name}
                    rating={casino.rating}
                    bgImage={casino.logo}
                    onClick={() => handlePlayClick(casino.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-black100 items-center justify-center pb-20">
        <div className="container m-10 mx-auto px-4">
          {currentCasinos.map((casino) => (
            <CasinoCard
              key={casino._id}
              image={casino.logo}
              title={casino.name}
              depositBonus={casino.depositBonus || 'Up to €1000 + 200 Free Spins'}
              welcomeBonus={casino.welcomeBonus || '200% Match Bonus'}
              rating={casino.rating}
              visits={`${casino.visits || 0}`}
            />
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-6 items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="bg-gray-700 hover:bg-gray-600 transition-colors text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-white text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="bg-gray-700 hover:bg-gray-600 transition-colors text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
