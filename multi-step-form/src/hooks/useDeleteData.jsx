import { useMutation } from "react-query";
import deleteUserData from "../api/deleteUserData";

const useDeleteData = (refetch) => {
  return useMutation((data) => deleteUserData(data), {
    onSuccess: () => {
      refetch();
    },
  });
};

export default useDeleteData;
