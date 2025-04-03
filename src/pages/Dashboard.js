import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">
            <h3 className="text-xl">Total Casinos</h3>
            <p className="text-3xl font-bold">25</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">
            <h3 className="text-xl">Total Blogs</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">
            <h3 className="text-xl">Total Users</h3>
            <p className="text-3xl font-bold">180</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
