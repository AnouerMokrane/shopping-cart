import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async () => {
  try {
    const data = (await axios.get("https://fakestoreapi.com/products")).data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(),
  });
};

export default useGetProducts;
