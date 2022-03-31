import { useMutation, useQueryClient } from "react-query";
import { deleteHabit, increaseStreak, resetStreak } from "../../api/habits";
import useAuth from "../useAuth";

const useHabitMutation = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const removeHabit = useMutation(
    (id) => {
      return deleteHabit(id, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
      },
    }
  );

  const updateStreak = useMutation(
    (id) => {
      return increaseStreak(id, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
      },
    }
  );

  const zeroStreak = useMutation(
    (id) => {
      return resetStreak(id, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("habits");
      },
    }
  );

  return { removeHabit, updateStreak, zeroStreak };
};

export default useHabitMutation;
