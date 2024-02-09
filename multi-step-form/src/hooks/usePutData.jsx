import { useMutation } from "react-query";
import putUserData from "../api/putUserData";
import { useNavigate } from "react-router-dom";

const usePutData = () => {
  const navigate = useNavigate();

  return useMutation((data) => putUserData(data), {
    onSuccess: (data) => {
      console.log(data);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePutData;
