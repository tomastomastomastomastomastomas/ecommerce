import styles from "./product.module.css";

export default function ProductCard({ title, images, price }) {
  console.log(styles);
  return (
    <div className={styles["product-card"]}>
      <span>{title}</span>
      <img
        className={styles["card-image"]}
        src={images[0]}
        alt="Product Image"
      />
      <span>{price}</span>
    </div>
  );
}
