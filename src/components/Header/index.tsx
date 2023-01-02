import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import StyledHeader from "./style";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { iKenzieBurguerProducts } from "../../pages/HomePage";

interface iHeaderProps {
  products: iKenzieBurguerProducts[];
  setProductsFilter: Dispatch<SetStateAction<iKenzieBurguerProducts[]>>;
}

const Header = ({ products, setProductsFilter }: iHeaderProps) => {
  const { changeTheme, currentTheme } = useContext(DarkModeContext);

  const [formData, setFormData] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setProductsFilter(
      products.filter((product) => {
        return (
          product.name.includes(formData) ||
          product.category.includes(formData) ||
          product.name.toLowerCase().includes(formData) ||
          product.category.toLowerCase().includes(formData)
        );
      })
    );
  }, [formData]);

  return (
    <StyledHeader>
      <h1 className="heading2">
        Josiel's <span className="heading4">Burguer</span>
      </h1>
      <div className="divFormButton">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="What would you like to eat?"
            onChange={(event) => setFormData(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={() => changeTheme()}>
          {currentTheme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
