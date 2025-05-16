import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import Sidebar from "../components/Sidebar";

const data = [
  { name: 'Jan', users: 40, revenue: 2400 },
  { name: 'Feb', users: 65, revenue: 4200 },
  { name: 'Mar', users: 90, revenue: 5800 },
  { name: 'Apr', users: 45, revenue: 3100 },
  { name: 'May', users: 75, revenue: 5100 },
];

const recentTransactions = [
  { id: 1, user: 'John Doe', amount: '$500', type: 'Deposit', date: '2023-07-15' },
  { id: 2, user: 'Jane Smith', amount: '$1200', type: 'Withdrawal', date: '2023-07-14' },
  { id: 3, user: 'Mike Johnson', amount: '$750', type: 'Deposit', date: '2023-07-14' },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Casinos</h3>
            <p className="text-4xl font-bold text-blue-600">25</p>
            <span className="text-sm text-green-500">+12% from last month</span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Blogs</h3>
            <p className="text-4xl font-bold text-green-600">12</p>
            <span className="text-sm text-blue-500">+3 new this week</span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Active Users</h3>
            <p className="text-4xl font-bold text-yellow-600">180</p>
            <span className="text-sm text-red-500">-2% from yesterday</span>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Monthly User Activity</h3>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3B82F6" />
            </BarChart>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Revenue Trend</h3>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3">User</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b last:border-b-0">
                    <td className="py-3">{transaction.user}</td>
                    <td className="py-3">{transaction.amount}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        transaction.type === 'Deposit' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;