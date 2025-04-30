import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCasino } from "../api/casinos.js";
import { uploadImage } from "../api/upload";
import Sidebar from "../components/Sidebar";
import { Editor } from "@tinymce/tinymce-react";

// List of all available tags
const ALL_TAGS = [
  // Casino Types
  "Crypto Casino",
  "Online Casino",
  "Certified Casino",
  "Mobile Casino",
  "Newest Casino",
  // Bonuses
  "Latest Bonus",
  "Exclusive Bonus",
  "Welcome Bonus",
  "No Deposit",
  "Free Spins Bonus",
  "Cashback Bonus",
  "No Wagering Bonus",
  // Games
  "Casino Games",
  "Table Games",
  "Card Games",
  "Dice Games",
  "Real Money Online Slots",
  "Poker",
  "Bingo",
  "Lottery Games",
  // Slots
  "Video Slots",
  "Classic Slots",
  "Progressive Slots",
  "New Slots",
  // Betting
  "Sports Betting",
  "New Betting Sites",
  "Bet Types",
  "Betting Bonuses",
  "Free Bets",
];

// List of all available countries
const ALL_COUNTRIES = [
  // North America
  "Canada",
  "United States",
  // Oceania
  "Australia",
  "New Zealand",
  // Europe
  "Austria",
  "Finland",
  "Germany",
  "Ireland",
  "Netherlands",
  "Norway",
  "Sweden",
  "Switzerland",
  "United Kingdom (UK)",
  "European Countries (General)",
  // Asia
  "India",
  // Other/Global
  "Global",
];

const CreateCasino = () => {
  const [casino, setCasino] = useState({
    name: "",
    logo: "",
    rating: 0,
    depositBonus: "",
    welcomeBonus: "",
    order: 0,
    tags: [],
    availableCountries: [],
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
    generalDescription: "",
    paymentDescription: "",
    customerSupportDescription: "",
    responsibleGamblingDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setCasino((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setCasino((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = async (e) => {
    try {
      setLoading(true);
      const file = e.target.files[0];
      const { url } = await uploadImage(file);
      setCasino((prev) => ({ ...prev, logo: url }));
    } catch (err) {
      setError(err.message || "Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = (tag) => {
    if (!casino.tags.includes(tag)) {
      setCasino((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setCasino((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleAddCountry = (country) => {
    if (!casino.availableCountries.includes(country)) {
      setCasino((prev) => ({
        ...prev,
        availableCountries: [...prev.availableCountries, country],
      }));
    }
  };

  const handleRemoveCountry = (countryToRemove) => {
    setCasino((prev) => ({
      ...prev,
      availableCountries: prev.availableCountries.filter(
        (country) => country !== countryToRemove
      ),
    }));
  };

  const handleEditorChange = (name, value) => {
    setCasino((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createCasino(casino);
      navigate("/casinos-admin");
    } catch (err) {
      setError(err.message || "Failed to create casino");
    } finally {
      setLoading(false);
    }
  };

  const editorInitConfig = {
    height: 300,
    menubar: false,
    plugins: ["link", "lists", "image", "table"],
    toolbar:
      "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Create Casino</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          {/* Basic Info */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Casino Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded"
                  value={casino.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded"
                />
                {casino.logo && (
                  <img src={casino.logo} alt="Preview" className="h-20 mt-2" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full p-2 border rounded"
                  value={casino.rating}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input
                  type="number"
                  name="order"
                  className="w-full p-2 border rounded"
                  value={casino.order}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Available Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleAddTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${casino.tags.includes(tag)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    disabled={casino.tags.includes(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Selected Tags
              </label>
              {casino.tags.length === 0 ? (
                <p className="text-gray-500">No tags selected</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {casino.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-blue-100 px-3 py-1 rounded-full flex items-center"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        className="ml-2 text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Countries */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Available Countries</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Available Countries
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {ALL_COUNTRIES.map((country) => (
                  <button
                    key={country}
                    type="button"
                    onClick={() => handleAddCountry(country)}
                    className={`px-3 py-1 rounded-full text-sm ${casino.availableCountries.includes(country)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    disabled={casino.availableCountries.includes(country)}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Selected Countries
              </label>
              {casino.availableCountries.length === 0 ? (
                <p className="text-gray-500">No countries selected</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {casino.availableCountries.map((country) => (
                    <div
                      key={country}
                      className="bg-blue-100 px-3 py-1 rounded-full flex items-center"
                    >
                      <span>{country}</span>
                      <button
                        type="button"
                        className="ml-2 text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveCountry(country)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bonuses */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Bonuses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deposit Bonus
                </label>
                <input
                  type="text"
                  name="depositBonus"
                  className="w-full p-2 border rounded"
                  value={casino.depositBonus}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Welcome Bonus
                </label>
                <input
                  type="text"
                  name="welcomeBonus"
                  className="w-full p-2 border rounded"
                  value={casino.welcomeBonus}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Rich Text Editor for Descriptions */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Descriptions</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  General Description
                </label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.generalDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) =>
                    handleEditorChange("generalDescription", value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Payment Description
                </label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.paymentDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) =>
                    handleEditorChange("paymentDescription", value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Customer Support Description
                </label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.customerSupportDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) =>
                    handleEditorChange("customerSupportDescription", value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Responsible Gambling Description
                </label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.responsibleGamblingDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) =>
                    handleEditorChange("responsibleGamblingDescription", value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6"
            disabled={loading}
          >
            {loading ? "Creating Casino..." : "Create Casino"}
          </button>
        </form>
      </div>

      

    </div>


  );
};

export default CreateCasino;
