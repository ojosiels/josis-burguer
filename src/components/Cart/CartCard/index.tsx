import React from "react";
import { iKenzieBurguerProducts } from "../../../pages/HomePage/index.js";

import StyledCartCard from "./style.js";

interface iCartCard {
  saleItem: iKenzieBurguerProducts;
  removeFromCart: (product: iKenzieBurguerProducts | null) => void;
}

const CartCard = ({ saleItem, removeFromCart }: iCartCard) => {
  return (
    <StyledCartCard>
      <img src={saleItem.img} alt={saleItem.name} title={saleItem.name} />
      <section>
        <h3 className="heading4">{saleItem.name}</h3>
        <p className="caption">{saleItem.category}</p>
      </section>

      <div>
        <p className="bodyText" onClick={() => removeFromCart(saleItem)}>
          Remover
        </p>
        <p className="bodyText">Qtd: {saleItem.quantity}</p>
      </div>
    </StyledCartCard>
  );
};

export default CartCard;
