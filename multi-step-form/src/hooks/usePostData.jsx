import { useNavigate } from "react-router-dom";
import postUserData from "../api/postUserData";
import { useMutation } from "react-query";

const usePostData = () => {
  const navigate = useNavigate();

  return useMutation((data) => postUserData(data), {
    onSuccess: () => {
      navigate("/form-data");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostData;
