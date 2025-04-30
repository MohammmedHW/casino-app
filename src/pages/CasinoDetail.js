// src/pages/CasinoDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import bonusesBg from "../assets/images/casino-bg.png";
import wazbeeLogo from "../assets/images/expert2.png";
import ColorThief from "colorthief";
import Navbar from "../components/Navbar"; // Ensure this import is added

const CasinoDetail = () => {
    const imgRef = useRef(null);
    const [bgColor, setBgColor] = useState("#1D1235");
    const [activeTab, setActiveTab] = useState("general");

    useEffect(() => {
        document.body.style.backgroundColor = "#1e1e1e";
        return () => {
            document.body.style.backgroundColor = null;
        };
    }, []);

    useEffect(() => {
        const img = imgRef.current;
        const colorThief = new ColorThief();

        const extractColor = () => {
            try {
                const color = colorThief.getColor(img);
                setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
            } catch (e) {
                console.error("ColorThief error:", e);
            }
        };

        if (img && img.complete) {
            extractColor();
        } else if (img) {
            img.addEventListener("load", extractColor);
            return () => img.removeEventListener("load", extractColor);
        }
    }, []);

    const renderTabContent = () => {
        switch (activeTab) {
            case "general":
                return (
                    <div className="space-y-2 text-sm text-gray-100 mt-4">
                        <p><strong>Website:</strong> <a href="https://example.com" className="text-blue-400 underline">https://example.com</a></p>
                        <p><strong>Affiliate Program:</strong> Available</p>
                        <p><strong>Language:</strong> English, Spanish</p>
                        <p><strong>Company:</strong> Example Ltd.</p>
                        <p><strong>Casino Type:</strong> Online, Live Casino</p>
                        <p><strong>Established:</strong> 2020</p>
                        <p><strong>License:</strong> MGA, Curacao</p>
                    </div>
                );
            case "payment":
                return (
                    <div className="space-y-2 text-sm text-gray-100 mt-4">
                        <p><strong>Minimum Deposit:</strong> $10</p>
                        <p><strong>Withdrawal Methods:</strong> Bank Transfer, PayPal, Crypto</p>
                        <p><strong>Withdrawal Time:</strong> 24-48 Hours</p>
                        <p><strong>Fees:</strong> No fees on deposits/withdrawals</p>
                    </div>
                );
            case "games":
                return (
                    <div className="space-y-2 text-sm text-gray-100 mt-4">
                        <p><strong>Slots:</strong> Available</p>
                        <p><strong>Live Casino:</strong> Yes</p>
                        <p><strong>Sports Betting:</strong> No</p>
                    </div>
                );
            case "responsible":
                return (
                    <div className="space-y-2 text-sm text-gray-100 mt-4">
                        <p><strong>Tools:</strong> Deposit Limits, Timeout Periods</p>
                        <p><strong>Support:</strong> 24/7 Help Center</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar />

            <header
                className="relative bg-cover bg-center h-[80vh] md:h-screen"
                style={{ backgroundImage: `url(${bonusesBg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                <div className="absolute inset-0 mt-20 z-10 flex justify-center items-center px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">

                        {/* Left Section: Logo */}
                        <div
                            className="flex items-center justify-center p-6 md:w-1/3"
                            style={{ backgroundColor: bgColor }}
                        >
                            <img
                                ref={imgRef}
                                src={wazbeeLogo}
                                alt="WazBee"
                                className="max-h-24"
                                crossOrigin="anonymous"
                            />
                        </div>

                        {/* Right Section: Details */}
                        <div className="p-6 text-left md:w-2/3">
                            <p className="text-sm text-gray-500 font-semibold uppercase">
                                Online Casino of the Month December 2024
                            </p>
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-gray-900">WAZBEE</h2>
                                <div className="flex items-center text-red-500 font-bold">
                                    <span className="text-xl">4.8</span>
                                    <span className="ml-2">⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                            </div>

                            {/* Bonuses */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <div className="border rounded-lg px-4 py-2 flex items-center gap-2 border-gray-300">
                                    <span role="img" aria-label="Deposit">💰</span>
                                    <div>
                                        <p className="text-xs text-gray-500">Deposit Bonus</p>
                                        <p className="text-sm font-semibold">
                                            Up to 1000 € cash bonus + 25 lk
                                        </p>
                                    </div>
                                </div>
                                <div className="border rounded-lg px-4 py-2 flex items-center gap-2 border-gray-300">
                                    <span role="img" aria-label="Spins">🎰</span>
                                    <div>
                                        <p className="text-xs text-gray-500">Welcome Bonus</p>
                                        <p className="text-sm font-semibold">32 Free spins</p>
                                    </div>
                                </div>
                            </div>

                            {/* Overview */}
                            <div className="mt-4 text-sm text-gray-700">
                                <h3 className="font-semibold mb-1">Overview</h3>
                                <p>
                                    WazBee Casino has joined our online casino list, offering you a range of casino
                                    games from industry-leading brands. The site is available in more than 10 languages
                                    and supports mobile devices.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-sm">
                                {[
                                    "✅ Finnish online casino",
                                    "✅ Mobile friendly",
                                    "✅ Highly responsible",
                                    "✅ Gaming lobby",
                                    "✅ Multilobby",
                                    "✅ Lexiakspot",
                                ].map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-100 px-2 py-1 rounded-full text-center"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-6 flex justify-between items-center">
                                <p className="text-sm text-gray-600">4,938 Has Already Visited!</p>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full">
                                    Play now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Tab Buttons */}
                <div className="flex space-x-4 border-b border-gray-700 pb-2 overflow-x-auto">
                    {["general", "payment", "games", "responsible"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-semibold px-4 py-2 rounded-t ${activeTab === tab
                                ? "bg-red-600 text-white"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {tab === "responsible" ? "Responsible Gaming" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div>{renderTabContent()}</div>
            </main>

            <Footer />
        </>
    );
};

export default CasinoDetail;
