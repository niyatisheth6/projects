import axios from "axios";

const getLoginStudentData = async () => {
  const response = await axios.get("http://localhost:8000/student");
  return response.data;
};

export default getLoginStudentData;
