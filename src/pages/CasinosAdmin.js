
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCasinos, deleteCasino } from "../api/casinos.js";
import Sidebar from "../components/Sidebar";

const CasinosAdmin = () => {
  const [casinos, setCasinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCasino(id);
      setCasinos(casinos.filter((casino) => casino._id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete casino");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Casinos</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600 transition"
          onClick={() => navigate("/create-casino")}
        >
          Create Casino
        </button>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Logo</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Rating</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino) => (
                <tr key={casino._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img src={casino.logo} alt={casino.name} className="h-10" />
                  </td>
                  <td className="p-3">{casino.name}</td>
                  <td className="p-3">{casino.rating} ⭐</td>
                  <td className="p-3">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 transition"
                      onClick={() => handleDelete(casino._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      onClick={() => navigate(`/edit-casino/${casino._id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CasinosAdmin;
