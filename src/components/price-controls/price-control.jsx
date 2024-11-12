import styles from "./price-controls.module.css";
import PriceButton from "../price-button/price-button";

export default function PriceControls({ children }) {
  return (
    <div className={styles["price-controls"]}>
      <PriceButton>-</PriceButton>
      <span>${children}</span>
      <PriceButton>+</PriceButton>
    </div>
  );
}
