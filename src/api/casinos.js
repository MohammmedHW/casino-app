import API from "./axios";

export const getCasinos = async () => {
  try {
    const response = await API.get("/casinos");
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Failed to fetch casinos";
  }
};

export const createCasino = async (casinoData) => {
  try {
    const response = await API.post("/casinos", casinoData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Failed to create casino";
  }
};

export const updateCasino = async (id, casinoData) => {
  try {
    const response = await API.put(`/casinos/${id}`, casinoData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Failed to update casino";
  }
};

export const deleteCasino = async (id) => {
  try {
    const response = await API.delete(`/casinos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Failed to delete casino";
  }
};

export const getCasinoById = async (id) => {
  try {
    const response = await API.get(`/casinos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Failed to fetch casino";
  }
};

export const updateCasinoOrder = async (id, newOrder) => {
  try {
    const response = await API.put(`/casinos/reorder/${id}`, { newOrder });
    return response.data;
  } catch (error) {}
};

export const getCasinoBySlug = async (slug) => {
  try {
    // Add full URL in development or ensure proxy is working
    const baseUrl =
      // process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://casino-backened.onrender.com";
      process.env.NODE_ENV === "development"
        ? "https://casino-backened.onrender.com"
        : "http://localhost:4000";

    const response = await fetch(`${baseUrl}/api/casinos/slug/${slug}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include", // if using cookies
    });

    // First check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error(`Expected JSON but got: ${text.substring(0, 100)}`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch casino");
    }

    return data;
  } catch (err) {
    console.error("Error fetching casino:", err);
    throw err;
  }
};
