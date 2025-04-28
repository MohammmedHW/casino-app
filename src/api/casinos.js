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
