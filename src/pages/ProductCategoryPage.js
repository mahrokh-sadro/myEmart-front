import React from "react";
import { useEffect, useState } from "react";

import ProductsListByCat from "../components/ProductsListByCat";
import Header from "../components/Header";

const ProductCategoryPage = () => {
  const path = window.location.pathname;
  let arr = [];
  arr = path.split("/");
  console.log(arr[2]);
  let cat = arr[2];

  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch(`https://eemart.herokuapp.com/products?category=${cat}`)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div>
      <Header />
      <ProductsListByCat />
    </div>
  );
};

export default ProductCategoryPage;
