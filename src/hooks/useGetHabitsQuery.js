import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const fetchHabits = async (token) => {
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

const useGetHabitsQuery = () => {
  const { token } = useAuth();
  const {
    isLoading,
    error,
    data: habits,
    isFetching,
  } = useQuery("habits", () => fetchHabits(token));
  console.log("Data: ", habits);
  console.log("isLoading: ", isLoading);
  console.log("isFetching: ", isFetching);
  console.log("Error: ", error);
  return { isLoading, error, habits, isFetching };
};

export default useGetHabitsQuery;
