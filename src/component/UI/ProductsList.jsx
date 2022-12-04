import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ products }) => {
  return (
    <>
      {products?.map((i) => (
        <ProductsCard item={i} />
      ))}
    </>
  );
};

export default ProductsList;
