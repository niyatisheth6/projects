import axios from "axios";

const deleteUserData = async (id) => {
  return await axios.delete(
    `https://64a3a3c9c3b509573b565930.mockapi.io/users/${id}`
  );
};
export default deleteUserData;
