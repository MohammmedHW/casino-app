import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getCasinoById, getCasinoBySlug } from "../api/casinos";
import ColorThief from "colorthief";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bonusesBg from "../assets/images/casino-bg.png";

const CasinoDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [casino, setCasino] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgColor, setBgColor] = useState("#1D1235");
  const [activeTab, setActiveTab] = useState("general");
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchCasino = async () => {
      try {
        const casinoId = location.state?.casinoId;
        let data;

        if (casinoId) {
          data = await getCasinoById(casinoId);
        } else {
          data = await getCasinoBySlug(slug);
          if (!data) {
            throw new Error("Casino not found");
          }
        }

        setCasino(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCasino();
  }, [slug, location.state]);

  useEffect(() => {
    document.body.style.backgroundColor = "#1e1e1e";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    if (!casino?.logo) return;

    const img = imgRef.current;
    const colorThief = new ColorThief();

    const extractColor = () => {
      try {
        const color = colorThief.getColor(img);
        setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      } catch (e) {
        console.error("ColorThief error:", e);
        setBgColor("#1D1235"); // Fallback color
      }
    };

    if (img && img.complete) {
      extractColor();
    } else if (img) {
      img.addEventListener("load", extractColor);
      return () => img.removeEventListener("load", extractColor);
    }
  }, [casino]);

  const renderTabContent = () => {
    if (!casino) return null;

    const safeJoin = (value, fallback = "") => {
      if (Array.isArray(value)) return value.join(", ");
      if (value) return value;
      return fallback;
    };

    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-4 text-sm text-gray-100 mt-4">
            {/* Badges for boolean fields */}
            <div className="flex gap-2 mb-4">
              {casino.hotCasino && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Hot Casino
                </span>
              )}
              {casino.recommendedByExperts && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Expert Recommended
                </span>
              )}
              {casino.certifiedCasino && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Certified
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong className="text-gray-300">Website:</strong>
                </p>
                <a
                  href={casino.generalInfo?.website || "#"}
                  className="text-blue-400 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {casino.generalInfo?.website || "Not available"}
                </a>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Affiliate Program:</strong>
                </p>
                <p>
                  {casino.generalInfo?.affiliateProgram
                    ? "Available"
                    : "Not available"}
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Languages:</strong>
                </p>
                <p>{safeJoin(casino.generalInfo?.languages, "English")}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Company:</strong>
                </p>
                <p>{casino.generalInfo?.companyName || "Not specified"}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Casino Type:</strong>
                </p>
                <p>
                  {safeJoin(casino.generalInfo?.casinoType, "Online Casino")}
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Established:</strong>
                </p>
                <p>{casino.generalInfo?.established || "Not specified"}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">License:</strong>
                </p>
                <p>{safeJoin(casino.generalInfo?.licences, "Not specified")}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Features:</strong>
                </p>
                <p>{safeJoin(casino.generalInfo?.features, "Not specified")}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Editor View:</strong>
                </p>
                <p>{casino.editorView || "Not specified"}</p>
              </div>
            </div>
          </div>
        );
      case "payment":
        return (
          <div className="space-y-4 text-sm text-gray-100 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong className="text-gray-300">Minimum Deposit:</strong>
                </p>
                <p>${casino.paymentInfo?.minimumDeposit || "10"}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Withdrawal Methods:</strong>
                </p>
                <p>
                  {safeJoin(
                    casino.paymentInfo?.withdrawalMethods,
                    "Various methods available"
                  )}
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Withdrawal Time:</strong>
                </p>
                <p>{casino.paymentInfo?.withdrawalTime || "Not specified"}</p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Fees:</strong>
                </p>
                <p>{casino.paymentInfo?.fees || "Not specified"}</p>
              </div>
            </div>
          </div>
        );
      case "games":
        return (
          <div className="space-y-4 text-sm text-gray-100 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span
                  className={`h-3 w-3 rounded-full mr-2 ${
                    casino.games?.slots ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p>
                  Slots: {casino.games?.slots ? "Available" : "Not available"}
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`h-3 w-3 rounded-full mr-2 ${
                    casino.games?.liveCasino ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p>
                  Live Casino:{" "}
                  {casino.games?.liveCasino ? "Available" : "Not available"}
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`h-3 w-3 rounded-full mr-2 ${
                    casino.games?.sportsBetting ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p>
                  Sports Betting:{" "}
                  {casino.games?.sportsBetting ? "Available" : "Not available"}
                </p>
              </div>
            </div>
          </div>
        );
      case "responsible":
        return (
          <div className="space-y-4 text-sm text-gray-100 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong className="text-gray-300">Tools:</strong>
                </p>
                <p>
                  {safeJoin(casino.responsibleGaming?.tools, "Not specified")}
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-300">Support:</strong>
                </p>
                <p>{casino.responsibleGaming?.support || "Not specified"}</p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                <strong className="text-gray-300">
                  Responsible Gambling Description:
                </strong>
              </p>
              <div
                className="prose prose-sm max-w-none text-gray-300"
                dangerouslySetInnerHTML={{
                  __html:
                    casino.responsibleGamblingDescription || "Not available",
                }}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-white text-xl">Loading casino details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-red-500 text-xl">{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!casino) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-white text-xl">Casino not found</div>
        </div>
        <Footer />
      </div>
    );
  }

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
              {casino.logo ? (
                <img
                  ref={imgRef}
                  src={casino.logo}
                  alt={casino.name}
                  className="max-h-24"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="text-white text-lg">No logo available</div>
              )}
            </div>

            {/* Right Section: Details */}
            <div className="p-6 text-left md:w-2/3">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  {casino.name}
                </h2>
                <div className="flex items-center text-red-500 font-bold">
                  <span className="text-xl">{casino.rating.toFixed(1)}</span>
                  <span className="ml-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(casino.rating) ? "⭐" : "☆"}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              {/* Bonuses */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="border rounded-lg px-4 py-2 flex items-center gap-2 border-gray-300">
                  <span role="img" aria-label="Deposit">
                    💰
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">Deposit Bonus</p>
                    <p className="text-sm font-semibold">
                      {casino.depositBonus || "No deposit bonus"}
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg px-4 py-2 flex items-center gap-2 border-gray-300">
                  <span role="img" aria-label="Spins">
                    🎰
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">Welcome Bonus</p>
                    <p className="text-sm font-semibold">
                      {casino.welcomeBonus || "No welcome bonus"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mt-4 text-sm text-gray-700">
                <h3 className="font-semibold mb-1">Overview</h3>
                <p>{casino.overview || "No overview available."}</p>
              </div>

              {/* Features */}
              {casino.generalInfo?.features?.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-sm">
                  {casino.generalInfo.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 px-2 py-1 rounded-full text-center"
                    >
                      ✅ {feature}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  {casino.visits || 0} Has Already Visited!
                </p>
                <a
                  href={casino.generalInfo?.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full"
                >
                  Play now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 bg-gray-900">
        {/* Tab Buttons */}
        <div className="flex space-x-4 border-b border-gray-700 pb-2 overflow-x-auto">
          {["general", "payment", "games", "responsible"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold px-4 py-2 rounded-t whitespace-nowrap ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab === "general" && "General Info"}
              {tab === "payment" && "Payment Info"}
              {tab === "games" && "Games"}
              {tab === "responsible" && "Responsible Gaming"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">{renderTabContent()}</div>
      </main>

      <Footer />
    </>
  );
};

export default CasinoDetail;
