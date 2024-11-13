import styles from "./price-button.module.css";

export default function PriceButton({ disable, children }) {
  return (
    <button
      disabled={disable}
      className={`${styles["price-button"]} ${disable ? styles.disable : ""}`}
    >
      {children}
    </button>
  );
}
