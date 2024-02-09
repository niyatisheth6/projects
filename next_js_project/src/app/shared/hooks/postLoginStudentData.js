import axios from "axios";

const postLoginStudentData = async (data) => {
  const response = await axios.post("http://localhost:8000/student", data);
  return response.data;
};
export default postLoginStudentData;
