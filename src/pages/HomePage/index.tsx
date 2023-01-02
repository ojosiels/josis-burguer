import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index.js";
import ProductList from "../../components/ProductList/index.js";
import Cart from "../../components/Cart/index.js";
import { StyledHomePageMain } from "./style.js";

export interface iKenzieBurguerProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  img: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<iKenzieBurguerProducts[]>([]);
  const [productsFilter, setProductsFilter] = useState<
    iKenzieBurguerProducts[]
  >([]);
  const [currentSale, setCurrentSale] = useState<iKenzieBurguerProducts[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setProductsFilter(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce(
        (previousValue: number, currentValue: iKenzieBurguerProducts) =>
          previousValue +
          Number(currentValue.price) * Number(currentValue.quantity),
        0
      )
    );
  }, [currentSale]);

  const addToCart = (product) => {
    const aux = currentSale.find((item) => {
      return item.id == product.id;
    });
    if (aux) {
      const newCurrentSale = currentSale.filter((item) => item !== aux);
      setCurrentSale([
        { ...product, quantity: aux.quantity + 1 },
        ...newCurrentSale,
      ]);
    } else {
      setCurrentSale([{ ...product, quantity: 1 }, ...currentSale]);
    }
  };

  const removeFromCart = (product) => {
    !product && setCurrentSale([]);
    const newCurrentSale = currentSale.filter((item) => item !== product);
    if (product.quantity > 1) {
      setCurrentSale([
        ...newCurrentSale,
        { ...product, quantity: product.quantity - 1 },
      ]);
    } else {
      setCurrentSale([...newCurrentSale]);
    }
  };

  return (
    <div className="App">
      <Header products={products} setProductsFilter={setProductsFilter} />

      <StyledHomePageMain>
        <ProductList productsFilter={productsFilter} addToCart={addToCart} />
        <Cart
          currentSale={currentSale}
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
        />
      </StyledHomePageMain>
    </div>
  );
};

export default HomePage;
