import styles from "./nav-bar.module.css";
import Cart from "../cart/cart";

export default function NavBar() {
  return (
    <nav className={styles["nav-bar"]}>
      <Cart />
    </nav>
  );
}
