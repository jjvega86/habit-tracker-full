import { useMutation, useQueryClient } from "react-query";
import { createHabit } from "../../api/habits";
import useAuth from "../useAuth";

const usePostHabitMutation = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const addHabit = useMutation(
    (newHabit) => {
      return createHabit(newHabit, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
      },
    }
  );

  return { addHabit };
};

export default usePostHabitMutation;
