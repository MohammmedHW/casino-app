import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCasinoById, updateCasino } from "../api/casinos";
import { uploadImage } from "../api/upload";
import Sidebar from "../components/Sidebar";

const EditCasino = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCasino = async () => {
      try {
        const data = await getCasinoById(id);
        setCasino(data);
      } catch (err) {
        setError(err.message || "Failed to load casino");
      } finally {
        setLoading(false);
      }
    };
    fetchCasino();
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateCasino(id, casino);
      navigate("/casinos-admin");
    } catch (err) {
      setError(err.message || "Failed to update casino");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !casino.name) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="text-center">Loading casino data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="text-red-500 text-center">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Edit Casino</h2>
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

          {/* General Info */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Website
                </label>
                <input
                  type="url"
                  name="generalInfo.website"
                  className="w-full p-2 border rounded"
                  value={casino.generalInfo.website}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="generalInfo.companyName"
                  className="w-full p-2 border rounded"
                  value={casino.generalInfo.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Casino"}
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              onClick={() => navigate("/casinos-admin")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCasino;
