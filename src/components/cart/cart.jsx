import styles from "./cart.module.css";

export default function Cart() {
  return (
    <button className={styles.cart}>
      <i className="fa-solid fa-cart-shopping"></i>
    </button>
  );
}
