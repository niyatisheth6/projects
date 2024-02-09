import axios from "axios";

const postUserData = async (value) => {
  const response = await axios.post(
    "https://64a3a3c9c3b509573b565930.mockapi.io/users",
    value
  );
  return response.data;
};
export default postUserData;
