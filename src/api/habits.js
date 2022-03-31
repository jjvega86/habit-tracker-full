import axios from "axios";

export const fetchHabits = async (token) => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/habits/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = async () => {
  try {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/habits/category/"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createHabit = async (habitData, token) => {
  let categories = [];
  categories.push({ name: habitData.category });
  let finalData = {
    habit_text: habitData.habitText,
    categories,
  };
  try {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/habits/",
      finalData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
