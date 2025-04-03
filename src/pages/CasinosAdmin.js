import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const CasinosAdmin = () => {
  const [casinos, setCasinos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/casinos")
      .then((res) => setCasinos(res.data))
      .catch((err) => console.error("Error fetching casinos:", err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Casinos</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => navigate("/create-casino")}
        >
          Create Casino
        </button>
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
              <tr key={casino._id} className="border-b">
                <td className="p-3">
                  <img src={casino.logo} alt={casino.name} className="h-10" />
                </td>
                <td className="p-3">{casino.name}</td>
                <td className="p-3">{casino.rating} ⭐</td>
                <td className="p-3">
                  <button className="bg-red-500 text-white px-3 py-1 rounded mr-2">
                    Delete
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasinosAdmin;
