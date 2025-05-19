import React, { useState } from "react";
import Card from "./Card"; // adjust the import path as needed

const casinos = [
  { name: "WazBee", logo: "/images/wazbee.png", rating: 4.5 },
  { name: "Spirit Casino", logo: "/images/spirit.png", rating: 4.2 },
  { name: "Betfair Casino", logo: "/images/betfair.png", rating: 4.7 },
  { name: "Cosmic", logo: "/images/cosmic.png", rating: 4.3 },
  { name: "Ybets", logo: "/images/ybets.png", rating: 4.6 },
];

const countries = [
  { name: "Canada", code: "ca" },
  { name: "United States", code: "us" },
  { name: "Australia", code: "au" },
  { name: "New Zealand", code: "nz" },
  { name: "Austria", code: "at" },
  { name: "Finland", code: "fi" },
  { name: "Germany", code: "de" },
  { name: "Ireland", code: "ie" },
  { name: "Netherlands", code: "nl" },
  { name: "Norway", code: "no" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "United Kingdom (UK)", code: "gb" },
  { name: "European Countries (General)", code: "eu" },
  { name: "India", code: "in" },
  { name: "Global", code: "gl" },
];

const CountryCasinoList = () => {
  const [selectedCountry, setSelectedCountry] = useState("United Arab Emirates");
  const [selectedCode, setSelectedCode] = useState("ae");

  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.name === e.target.value);
    setSelectedCountry(selected.name);
    setSelectedCode(selected.code);
  };

  return (
    <div className="min-h-screen text-white px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold uppercase mb-2">
          Find Casinos by Country
        </h1>
        <p className="italic mb-8 text-lg text-gray-300">
          Browse top-rated casinos available in your region for the best experience and localized offers.
        </p>

        {/* Country Dropdown */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <div className="flex items-center bg-white text-black px-4 py-2 rounded-md w-full sm:w-80">
            <img
              src={`https://flagcdn.com/w40/${selectedCode}.png`}
              alt="flag"
              className="w-6 h-4 mr-2"
            />
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="bg-transparent outline-none w-full text-black"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
         
        </div>

        {/* Casino Grid using Card Component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {casinos.map((casino, index) => (
            <Card
              key={index}
              rating={casino.rating}
              bgImage={casino.logo}
               flagCode={selectedCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCasinoList;
