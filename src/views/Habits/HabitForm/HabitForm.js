import HabitButton from "../HabitButton/HabitButton";

export default function HabitForm({ dispatch, currentText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: currentText });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="currentText"
        value={currentText}
        onChange={(e) =>
          dispatch({
            type: "FIELD",
            fieldName: "currentText",
            payload: e.target.value,
          })
        }
      />
      <HabitButton buttonType="add" />
    </form>
  );
}
