import { useQuery } from "react-query";
import getUserData from "../api/getUserData";

const useGetData = () => {
  return useQuery("get_data", () => getUserData());
};

export default useGetData;
