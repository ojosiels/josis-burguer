import React, { useState } from "react";
import { iKenzieBurguerProducts } from "../../pages/HomePage";

import CartCard from "./CartCard";

import { StyledCart, StyledEmptyCart } from "./style.js";

interface iCart {
  currentSale: iKenzieBurguerProducts[];
  removeFromCart: (product: iKenzieBurguerProducts | null) => void;
  cartTotal: number;
}

const Cart = ({ currentSale, removeFromCart, cartTotal }: iCart) => {
  return currentSale.length ? (
    <StyledCart>
      <h2>Products</h2>
      <ul>
        {currentSale.map((saleItem) => (
          <CartCard
            key={saleItem.id}
            saleItem={saleItem}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <section>
        <div className="bodyBold">
          <p>Total:</p>
          <p>R$ {cartTotal.toFixed(2)}</p>
        </div>
        <button onClick={() => removeFromCart(null)}>Clean products</button>
      </section>
    </StyledCart>
  ) : (
    <StyledEmptyCart>
      <h2>Products</h2>
      <p className="heading3">Your bag is empty</p>
      <p className="bodyText">Add products</p>
    </StyledEmptyCart>
  );
};

export default Cart;
