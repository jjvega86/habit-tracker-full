import HabitButton from "../HabitButton/HabitButton";
import useCustomForm from "../../../hooks/useCustomForm";
import useGetCategoriesQuery from "../../../hooks/queries/useGetCategoriesQuery";
import usePostHabitMutation from "../../../hooks/mutations/usePostHabitMutation";

export default function HabitForm({ onSubmit }) {
  const { categories, isLoading } = useGetCategoriesQuery();
  const { addHabit } = usePostHabitMutation();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    { habitText: "", category: "Exercise" },
    () => {
      addHabit.mutate(formData);
      onSubmit();
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="habitText"
        value={formData.habitText}
        onChange={handleInputChange}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      >
        {isLoading
          ? null
          : categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
      </select>
      <HabitButton buttonType="add" />
    </form>
  );
}
