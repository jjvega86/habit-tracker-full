import { useQuery } from "react-query";
import { fetchCategories } from "../../api/habits";

const useGetCategoriesQuery = () => {
  const {
    isLoading,
    error,
    data: categories,
    isFetching,
  } = useQuery("categories", () => fetchCategories());
  return { isLoading, error, categories, isFetching };
};

export default useGetCategoriesQuery;
