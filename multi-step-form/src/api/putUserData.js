import axios from "axios";

const putUserData = async (data) => {
  const response = await axios.put(
    `https://64a3a3c9c3b509573b565930.mockapi.io/users/${data.id}`,
    data
  );
  return response;
};
export default putUserData;
