import { useQuery } from "react-query";
import useAuth from "../useAuth";

import { fetchHabits } from "../../api/habits";

const useGetHabitsQuery = () => {
  const { token } = useAuth();
  const {
    isLoading,
    error,
    data: habits,
    isFetching,
  } = useQuery("habits", () => fetchHabits(token));
  return { isLoading, error, habits, isFetching };
};

export default useGetHabitsQuery;
