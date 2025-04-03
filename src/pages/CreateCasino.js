import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const CreateCasino = () => {
  const [casino, setCasino] = useState({
    name: "",
    logo: "",
    rating: 0,
    depositBonus: "",
    welcomeBonus: "",
    order: 0,
    generalInfo: {
      website: "",
      languages: "",
      established: "",
      licences: "",
      affiliateProgram: "",
      companyName: "",
    },
    characteristics: {
      casinoType: "",
      features: "",
    },
    paymentInfo: {
      minimumDeposit: 0,
      withdrawalMethods: "",
    },
    availableCountries: "",
    editorView: "",
    generalDescription: "",
    paymentDescription: "",
    customerSupportDescription: "",
    responsibleGamblingDescription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCasino({ ...casino, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/casinos", casino)
      .then(() => {
        navigate("/admin/casinos");
      })
      .catch((err) => console.error("Error adding casino:", err));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
     
        
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg m-5">
          <h2 className="text-2xl text-black100 font-bold mb-4">Create Casino</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 overflow-y-auto max-h-[calc(100vh-150px)]"
          >
            {/* Casino Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Casino Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter the casino's name"
                value={casino.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
              <small className="text-gray-500">Enter the official name of the casino.</small>
            </div>

            {/* Logo URL */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Logo URL</label>
              <input
                type="text"
                name="logo"
                placeholder="Enter the URL of the casino logo"
                value={casino.logo}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Provide the URL where the logo image is hosted.</small>
            </div>

            {/* Rating */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Rating (0-5)</label>
              <input
                type="number"
                name="rating"
                placeholder="Enter a rating from 0 to 5"
                value={casino.rating}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                min="0"
                max="5"
                required
              />
              <small className="text-gray-500">Rate the casino from 0 (lowest) to 5 (highest).</small>
            </div>

            {/* Deposit Bonus */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Deposit Bonus</label>
              <input
                type="text"
                name="depositBonus"
                placeholder="Enter deposit bonus offer details"
                value={casino.depositBonus}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Describe the deposit bonus the casino offers to new players.</small>
            </div>

            {/* Welcome Bonus */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Welcome Bonus</label>
              <input
                type="text"
                name="welcomeBonus"
                placeholder="Enter the welcome bonus details"
                value={casino.welcomeBonus}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Describe the welcome bonus offered to new players.</small>
            </div>

            {/* Order */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Order</label>
              <input
                type="number"
                name="order"
                placeholder="Enter a number for sorting order"
                value={casino.order}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Use this field to set the order of the casino in listings (lower numbers show first).</small>
            </div>

            {/* Website URL */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Website</label>
              <input
                type="text"
                name="generalInfo.website"
                placeholder="Enter the casino's website URL"
                value={casino.generalInfo.website}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Enter the official website link of the casino.</small>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Company Name</label>
              <input
                type="text"
                name="generalInfo.companyName"
                placeholder="Enter the company name"
                value={casino.generalInfo.companyName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
              <small className="text-gray-500">Enter the legal name of the company behind the casino.</small>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                Add Casino
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                onClick={() => navigate("/admin/casinos")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
   
  );
};

export default CreateCasino;
