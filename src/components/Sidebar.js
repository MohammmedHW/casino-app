import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaGamepad, FaBlog, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 sticky top-0 h-[100dvh] bg-gray-900 text-white p-5 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link 
            to="/dashboard" 
            className={`flex items-center space-x-2 p-2 rounded ${
              location.pathname === "/dashboard" ? "bg-blue-500 text-white" : "hover:text-blue-400"
            }`}
          >
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/casinos-admin" 
            className={`flex items-center space-x-2 p-2 rounded ${
              location.pathname === "/casinos-admin" ? "bg-blue-500 text-white" : "hover:text-blue-400"
            }`}
          >
            <FaGamepad /> <span>Casinos</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/blogs-admin" 
            className={`flex items-center space-x-2 p-2 rounded ${
              location.pathname === "/blogs-admin" ? "bg-blue-500 text-white" : "hover:text-blue-400"
            }`}
          >
            <FaBlog /> <span>Blogs</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/settings-admin" 
            className={`flex items-center space-x-2 p-2 rounded ${
              location.pathname === "/settings-admin" ? "bg-blue-500 text-white" : "hover:text-blue-400"
            }`}
          >
            <FaCog /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;