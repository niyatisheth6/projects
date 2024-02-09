import axios from "axios";

const getAdminApi = async () => {
  const response = await axios.get(
    "https://64a3a3c9c3b509573b565930.mockapi.io/admin"
  );
  return response.data;
};

export default getAdminApi;
