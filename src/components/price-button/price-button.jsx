import styles from "./price-button.module.css";

export default function PriceButton({ children }) {
  return <button className={styles["price-button"]}>{children}</button>;
}
