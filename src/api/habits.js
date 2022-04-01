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
  console.log(habitData);
  try {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/habits/",
      habitData,
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

export const deleteHabit = async (id, token) => {
  try {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/habits/streak/${id}/`,
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

export const increaseStreak = async (id, token) => {
  try {
    let response = await axios.patch(
      `http://127.0.0.1:8000/api/habits/streak/${id}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const resetStreak = async (id, token) => {
  try {
    let response = await axios.patch(
      `http://127.0.0.1:8000/api/habits/streak/${id}/?type=reset`,
      {},
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
