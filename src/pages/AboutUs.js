// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import Navbar from "../components/Navbar";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Login failed");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-96">
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Admin Login
//           </h2>
//           {error && (
//             <div className="text-red-500 mb-4 text-center">{error}</div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border rounded"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-2 border rounded"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 py-24 bg-[#181818] text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
          About MR Gambler
        </h1>

        {/* About Section */}
        <section className="mb-12">
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">
              Welcome to MR Gambler
            </h2>
            <p className="mb-4 text-gray-300">
              At MR Gambler, we're redefining online casino entertainment with 
              cutting-edge gaming experiences. Established in 2020, we've become 
              a trusted name in online gambling, offering premium casino games 
              with fairness and transparency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  🎰 Our Features
                </h3>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>2000+ casino games including slots, poker, and live dealers</li>
                  <li>24/7 customer support</li>
                  <li>SSL encrypted transactions</li>
                  <li>Provably fair gaming system</li>
                  <li>Mobile-optimized platform</li>
                </ul>
              </div>

              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  🏆 Our Commitment
                </h3>
                <p className="text-gray-300">
                  We prioritize responsible gaming through:
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Self-exclusion options</li>
                  <li>Deposit limits</li>
                  <li>Reality check reminders</li>
                  <li>Collaboration with gambling support organizations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-12 border-t border-gray-700 pt-12">
          <h2 className="text-3xl font-bold mb-6 text-red-600">
            Privacy Policy
          </h2>
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
            <p className="mb-4 text-gray-300">
              Your privacy is crucial to us. This policy outlines how we handle your information:
            </p>
            <div className="space-y-4">
              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-red-600">
                  🔒 Data Collection
                </h3>
                <p className="text-gray-300">
                  We collect necessary information for account creation, transactions, 
                  and personalization. This includes contact details, payment information, 
                  and gameplay history.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-red-600">
                  📊 Data Usage
                </h3>
                <p className="text-gray-300">
                  Information is used to improve services, process transactions, 
                  and ensure regulatory compliance. We never sell personal data 
                  to third parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-12 border-t border-gray-700 pt-12">
          <h2 className="text-3xl font-bold mb-6 text-red-600">
            Terms & Conditions
          </h2>
          <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg">
            <div className="space-y-6">
              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-red-600">
                  1. Eligibility
                </h3>
                <p className="text-gray-300">
                  Users must be 18+ and comply with local gambling laws. 
                  We reserve the right to verify age and location.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-red-600">
                  2. Account Responsibility
                </h3>
                <p className="text-gray-300">
                  Users are responsible for maintaining account security. 
                  Immediately report unauthorized access.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-red-600">
                  3. Bonus Terms
                </h3>
                <p className="text-gray-300">
                  Bonuses subject to wagering requirements. See individual 
                  promotion terms for details.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-red-900/20 p-4 rounded-lg">
              <p className="text-red-600 text-center">
                By using MR Gambler, you agree to our Terms and confirm 
                compliance with local laws.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;