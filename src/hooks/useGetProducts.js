import { useState } from "react";
import { axios } from "../boot";

export default function useGetProducts() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const url = "/admins/pub/shop/products";
    axios.get(url).then((res) => {
      const data = res.data.data.map((e) => ({ ...e, isAdmin: true }));
      setProducts(data);
    });
  };
  return [products, getProducts];
}
