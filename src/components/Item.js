import React, { useState } from "react";

function Item({ name, category }) {

const [cart, setCart] = useState(false)

function handleBtnCart() {
  setCart((inCart) => !inCart)
}
const itemClass = cart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleBtnCart}>{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
