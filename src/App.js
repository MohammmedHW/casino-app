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


       
      </Routes>
    </>
  );
}

export default App;
