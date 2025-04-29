import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCasino } from "../api/casinos.js";
import { uploadImage } from "../api/upload";
import Sidebar from "../components/Sidebar";
import { Editor } from "@tinymce/tinymce-react";

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
    generalDescription: "",
    paymentDescription: "",
    customerSupportDescription: "",
    responsibleGamblingDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
                <label className="block text-sm font-medium mb-1">Casino Name</label>
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
                <label className="block text-sm font-medium mb-1">Rating (0-5)</label>
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
                <label className="block text-sm font-medium mb-1">Deposit Bonus</label>
                <input
                  type="text"
                  name="depositBonus"
                  className="w-full p-2 border rounded"
                  value={casino.depositBonus}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Welcome Bonus</label>
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
                <label className="block text-sm font-medium mb-1">General Description</label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.generalDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) => handleEditorChange("generalDescription", value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment Description</label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.paymentDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) => handleEditorChange("paymentDescription", value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Customer Support Description</label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.customerSupportDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) => handleEditorChange("customerSupportDescription", value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Responsible Gambling Description</label>
                <Editor
                  apiKey="sgqonpylyxmnpot9w1fgdcaq8fh1l86kcoyb8we397c0ni4m"
                  value={casino.responsibleGamblingDescription}
                  init={editorInitConfig}
                  onEditorChange={(value) => handleEditorChange("responsibleGamblingDescription", value)}
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
