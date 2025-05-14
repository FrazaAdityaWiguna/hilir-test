import api from "./api";

export const fetchAds = async () => {
  const response = await api.get("/ads");
  return response.data;
};

