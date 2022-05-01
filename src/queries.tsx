import axios from "axios";

export const fetchVehicles = async () => {
  const { data } = await axios.get(
    "https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles"
  );
  return data;
};

export const fetchVehicle = async (id: string) => {
  const { data } = await axios.get(
    `https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles/${id}`
  );
  return data;
};
