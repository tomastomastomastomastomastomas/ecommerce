import styles from "./price-controls.module.css";
import PriceButton from "../price-button/price-button";
import { useState } from "react";

export default function PriceControls({ children }) {
  const [count, setCount] = useState(0);

  function handleAddProduct() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleSubstractProduct() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className={styles["price-controls"]}>
      <PriceButton disable={count == 0}>-</PriceButton>
      <span>${children}</span>
      <PriceButton>+</PriceButton>
    </div>
  );
}
