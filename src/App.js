import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Casinos from "./pages/casinos";
import Bonuses from "./pages/Bonuses";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard.js";
import CasinosAdmin from "./pages/CasinosAdmin";
import BlogsAdmin from "./pages/BlogsAdmin";
import SettingsAdmin from "./pages/SettingsAdmin";
import CreateCasino from "./pages/CreateCasino";
import CreateBlog from "./pages/CreateBlog";
import EditCasino from "./pages/EditCasino";
import EditBlog from "./pages/EditBlog";

import CasinoDetail from "./pages/CasinoDetail";

import CryptoCasinoPage from "./SubMenu/CryptoCasinoPage";
import OnlineCasinoPage from "./SubMenu/OnlineCasinoPage";
import CertifiedCasinoPage from "./SubMenu/CertifiedCasinoPage";
import MobileCasinoPage from "./SubMenu/MobileCasinoPage";
import NewestCasinoPage from "./SubMenu/NewestCasinoPage";

// Importing Bonus Type Pages
import LatestBonus from "./SubMenu/LatestBonus";
import ExclusiveBonus from "./SubMenu/ExclusiveBonus";
import WelcomeBonus from "./SubMenu/WelcomeBonus";
import NoDepositBonus from "./SubMenu/NoDeposit.js";
import FreeSpinsBonus from "./SubMenu/FreeSpinsBonus";
import CashbackBonus from "./SubMenu/CashbackBonus";
import NoWageringBonus from "./SubMenu/NoWageringBonus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/bonuses" element={<Bonuses />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/casinos-admin" element={<CasinosAdmin />} />
        <Route path="/blogs-admin" element={<BlogsAdmin />} />
        <Route path="/settings-admin" element={<SettingsAdmin />} />
        <Route path="/create-casino" element={<CreateCasino />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-casino/:id" element={<EditCasino />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />

        <Route path="/casino" element={<CasinoDetail />} />

        <Route path="/casinos/crypto" element={<CryptoCasinoPage />} />
        <Route path="/casinos/online" element={<OnlineCasinoPage />} />
        <Route path="/casinos/certified" element={<CertifiedCasinoPage />} />
        <Route path="/casinos/mobile" element={<MobileCasinoPage />} />
        <Route path="/casinos/newest" element={<NewestCasinoPage />} />
        <Route path="/casinos/:slug" element={<CasinoDetail />} />

        {/* Routes for Bonus Types */}
        <Route path="/bonuses/latest" element={<LatestBonus />} />
        <Route path="/bonuses/exclusive" element={<ExclusiveBonus />} />
        <Route path="/bonuses/welcome" element={<WelcomeBonus />} />
        <Route path="/bonuses/no-deposit" element={<NoDepositBonus />} />
        <Route path="/bonuses/free-spins" element={<FreeSpinsBonus />} />
        <Route path="/bonuses/cashback" element={<CashbackBonus />} />
        <Route path="/bonuses/no-wagering" element={<NoWageringBonus />} />
      </Routes>
    </>
  );
}

export default App;
