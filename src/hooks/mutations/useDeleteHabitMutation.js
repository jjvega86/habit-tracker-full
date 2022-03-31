import { useMutation, useQueryClient } from "react-query";
import { deleteHabit } from "../../api/habits";
import useAuth from "../useAuth";

const useDeleteHabitMutation = () => {
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

  return { removeHabit };
};

export default useDeleteHabitMutation;
