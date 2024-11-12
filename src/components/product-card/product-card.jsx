import styles from "./product.module.css";
import PriceControls from "../price-controls/price-control";

export default function ProductCard({ title, images, price }) {
  return (
    <div className={styles["product-card"]}>
      <span>{title}</span>
      <img
        className={styles["card-image"]}
        src={images[0]}
        alt="Product Image"
      />
      <PriceControls>{price}</PriceControls>
    </div>
  );
}
