import axios from "axios";

const getUserData = async () => {
  const res = await axios.get(
    "https://64a3a3c9c3b509573b565930.mockapi.io/users"
  );
  return res.data;
};
export default getUserData;
