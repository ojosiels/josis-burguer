import React from "react";
import { iKenzieBurguerProducts } from "../../../pages/HomePage/index.js";

import StyledProductCard from "./style.js";
interface iProductCardProps {
  product: iKenzieBurguerProducts;
  addToCart: (product: iKenzieBurguerProducts) => void;
}
const ProductCard = ({ product, addToCart }: iProductCardProps) => {
  return (
    <StyledProductCard>
      <img src={product.img} alt={product.name} title={product.name} />

      <section>
        <h2 className="heading3">{product.name}</h2>
        <p className="caption">{product.category}</p>
        <p className="bodyBold">R$ {product.price}</p>
        <button className="green medium" onClick={() => addToCart(product)}>
          Add
        </button>
      </section>
    </StyledProductCard>
  );
};

export default ProductCard;
