import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Casinos from "./pages/casinos";
import Bonuses from "./pages/Bonuses";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import CasinosAdmin from "./pages/CasinosAdmin";
import BlogsAdmin from "./pages/BlogsAdmin";
import SettingsAdmin from "./pages/SettingsAdmin";
import CreateCasino from "./pages/CreateCasino";
import CreateBlog from "./pages/CreateBlog";
import EditCasino from "./pages/EditCasino";
import EditBlog from "./pages/EditBlog";
import CasinoDetail from "./pages/CasinoDetail";

import Login from "./pages/Login";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import CookiesPolicy from "./pages/CookiesPolicies";
import ResponsibleGambling from "./pages/ResponsibleGambling";


import { trackPageView } from './utils/analytics';
function App() {
  const location = useLocation();

  useEffect(() => {
    // Track initial pageview
    trackPageView(location.pathname);

    // Cleanup function
    return () => {
      // Add any cleanup logic here if needed
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casinos" element={<Casinos />} />
      <Route path="/bonuses" element={<Bonuses />} />
      <Route path="/games" element={<Games />} />
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/casinos-admin" element={<CasinosAdmin />} />
      <Route path="/blogs-admin" element={<BlogsAdmin />} />
      <Route path="/settings-admin" element={<SettingsAdmin />} />
      <Route path="/create-casino" element={<CreateCasino />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/edit-casino/:id" element={<EditCasino />} />
      <Route path="/edit-blog/:id" element={<EditBlog />} />
      <Route path="/casino" element={<CasinoDetail />} />
      <Route path="/casinos/:slug" element={<CasinoDetail />} />

      {/* Filtered Casinos */}
      <Route path="/casinos/crypto" element={<Casinos type="crypto" />} />
      <Route path="/casinos/online" element={<Casinos type="online" />} />
      <Route path="/casinos/certified" element={<Casinos type="certified" />} />
      <Route path="/casinos/mobile" element={<Casinos type="mobile" />} />
      <Route path="/casinos/newest" element={<Casinos type="newest" />} />

      {/* Bonus Types */}
      <Route path="/bonuses/latest" element={<Bonuses type="latest" />} />
      <Route path="/bonuses/exclusive" element={<Bonuses type="exclusive" />} />
      <Route path="/bonuses/welcome" element={<Bonuses type="welcome" />} />
      <Route
        path="/bonuses/no-deposit"
        element={<Bonuses type="no-deposit" />}
      />
      <Route
        path="/bonuses/free-spins"
        element={<Bonuses type="freespins" />}
      />
      <Route path="/bonuses/cashback" element={<Bonuses type="cashback" />} />
      <Route
        path="/bonuses/no-wagering"
        element={<Bonuses type="no-wagering" />}
      />

      {/* Games Types */}
      <Route path="/games/casino" element={<Games type="casino" />} />
      <Route path="/games/table" element={<Games type="table" />} />
      <Route path="/games/card" element={<Games type="card" />} />
      <Route path="/games/dice" element={<Games type="dice" />} />
      <Route
        path="/games/real-money-slots"
        element={<Games type="Real Money Online Slots" />}
      />
      <Route path="/games/poker" element={<Games type="poker" />} />
      <Route path="/games/bingo" element={<Games type="bingo" />} />
      <Route path="/games/lottery" element={<Games type="lottery" />} />


      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/responsible-gambling" element={<ResponsibleGambling />} />
    </Routes>
  );
}

export default App;
