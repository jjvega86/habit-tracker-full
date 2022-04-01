import { useState } from "react";

import HabitButton from "../HabitButton/HabitButton";
import { Form, Input } from "../../../globalStyles";
import Select from "react-select";

import { formatHabitData } from "../../../utils/helpers";

import useGetCategoriesQuery from "../../../hooks/queries/useGetCategoriesQuery";
import usePostHabitMutation from "../../../hooks/mutations/usePostHabitMutation";

export default function HabitForm({ onSubmit }) {
  const { categories } = useGetCategoriesQuery();
  const { addHabit } = usePostHabitMutation();

  const options = categories
    ? categories.map((category) => {
        return { value: category.name, label: category.name };
      })
    : null;

  const [optionsSelected, setOptionsSelected] = useState(null);
  const [habitText, setHabitText] = useState("");

  const handleOptionSelected = (selected) => {
    setOptionsSelected(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finalData = formatHabitData(habitText, optionsSelected);
    addHabit.mutate(finalData);
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="habitText"
        value={habitText}
        onChange={(e) => setHabitText(e.target.value)}
      />
      <Select
        options={options}
        isMulti
        onChange={handleOptionSelected}
        value={optionsSelected}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "white",
            primary: "lightblue",
          },
        })}
      />
      <HabitButton buttonType="add" />
    </Form>
  );
}
