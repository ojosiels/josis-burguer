import React from "react";
import { iKenzieBurguerProducts } from "../../pages/HomePage";

import ProductCard from "./ProductCard";

import StyledProductList from "./style.js";

interface iProductListProps {
  productsFilter: iKenzieBurguerProducts[];
  addToCart: (product: iKenzieBurguerProducts) => void;
}

const ProductList = ({ productsFilter, addToCart }: iProductListProps) => {
  return (
    <StyledProductList>
      {productsFilter.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
