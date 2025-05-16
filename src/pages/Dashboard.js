import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line, ResponsiveContainer
} from 'recharts';
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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Casinos', value: 25, color: 'text-blue-600', sub: '+12% from last month', subColor: 'text-green-500' },
            { title: 'Total Blogs', value: 12, color: 'text-green-600', sub: '+3 new this week', subColor: 'text-blue-500' },
            { title: 'Active Users', value: 180, color: 'text-yellow-600', sub: '-2% from yesterday', subColor: 'text-red-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-base font-semibold text-gray-600 mb-2">{stat.title}</h3>
              <p className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              <span className={`text-sm ${stat.subColor}`}>{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Monthly User Activity</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Revenue Trend</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
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
