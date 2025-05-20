import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import casinoBg from '../assets/images/bonuses-bg.png';
import SearchBox from '../components/searchbox';
import Card from '../components/Card';
import ExpertCard from '../components/ExpertCard';

import API from "../api/axios";

import certified from '../assets/images/Certified.png';
import Footer from "../components/Footer";

import leftCircle from "../assets/images/lefteclipse.png";
import rightCircle from "../assets/images/righteclipse.png";
const TYPE_TO_TAG_MAP = {
  'latest': 'Latest Bonus',
  'exclusive': 'Exclusive Bonus',
  'welcome': 'Welcome Bonus',
  'no-deposit': 'No Deposit',
  'freespins': 'Free Spins Bonus',
  'cashback': 'Cashback Bonus',
  'no-wagering': 'No Wagering Bonus',


};
const Bonuses = ({ type }) => {
  const [casinosData, setCasinosData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#1e1e1e";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    const fetchCasinos = async () => {
      setLoading(true);
      try {
        const response = await API.get("/casinos");
        setCasinosData(response.data);
        filterCasinos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCasinos();
  }, [type]);

  const filterCasinos = (data) => {
    // If no type is provided, show all casinos
    if (!type || typeof type !== "string") {
      setFilteredData(data);
      return;
    }

    // Get the exact tag from the mapping
    const exactTag = TYPE_TO_TAG_MAP[type];

    // If no matching tag found, use a more flexible matching
    if (!exactTag) {
      // Normalize the type by removing dashes and converting to lowercase
      const normalizedType = type.replace(/-/g, '').toLowerCase();

      const filtered = data.filter(casino => {
        // Ensure tags exist and is an array
        if (!Array.isArray(casino.tags)) return false;

        return casino.tags.some(tag => {
          if (!tag) return false;

          // Normalize tag by removing dashes and converting to lowercase
          const normalizedTag = tag.replace(/-/g, '').toLowerCase();

          // Multiple matching strategies
          return (
            normalizedTag.includes(normalizedType) || // Partial match
            normalizedType.includes(normalizedTag) || // Reverse partial match
            normalizedTag === normalizedType // Exact match without dashes
          );
        });
      });

      setFilteredData(filtered);
      console.log(`Filtered for flexible type "${type}":`, filtered);
      return;
    }

    // Filter using exact tag matching
    const filtered = data.filter(casino =>
      Array.isArray(casino.tags) && casino.tags.includes(exactTag)
    );

    setFilteredData(filtered);
    console.log(`Filtered for exact type "${type}":`, filtered);
  };



  return (
    <>
      <Navbar />

      <header
        className="relative bg-cover bg-center h-[60vh] min-h-[400px] md:h-screen"
        style={{ backgroundImage: `url(${casinoBg})` }}
      >
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black100 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">

        <div className="container mx-auto text-center absolute z-10 top-5 h-full flex flex-col justify-center items-center px-2">
         
          <div className="mt-32 px-4 w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <SearchBox />
            </div>
          </div>
  </div>
        </div>
      </header>

      <section className="py-10 bg-black100 text-center">
        <h2 className="text-3xl text-white font-semibold mb-6">Top Casinos</h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-10 mt-0">
            {loading ? (
              <p className="text-white">Loading...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
               filteredData.slice(0, 5).map((casino, index) => (
                <Card key={index} name={casino.name} rating={casino.rating} bgImage={casino.logo} />
              ))
            )}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-50 w-full">
              {filteredData.slice(0, 4).map((casino, index) => (
                <Card key={index} name={casino.name} rating={casino.rating} bgImage={casino.logo} />
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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                filteredData.slice(0, 6).map((casino, index)=> (
                  <ExpertCard key={index} logo={casino.logo} name={casino.name} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 bg-black100 text-center">
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
          
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error}</p>
                  ) : (
                    filteredData.slice(0, 6).map((casino, index) => (
                      <ExpertCard key={index} logo={casino.logo} name={casino.name} />
                    ))
                  )}
                </div>
              </div>
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
             
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error}</p>
                  ) : (
                    filteredData.slice(0, 6).map((casino, index) => (
                      <ExpertCard key={index} logo={casino.logo} name={casino.name} />
                    ))
                  )}
                </div>
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
