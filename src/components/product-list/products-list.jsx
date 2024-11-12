import { useState, useEffect } from "preact/hooks";
import ProductCard from "../product-card/product-card";
import styles from "./products.module.css";

export default function ProductsList() {
  const [productsList, setProductsList] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProductsList(result.products);
      });
  }, []);
  return (
    <>
      <div className={styles["products-list"]}>
        {productsList ? (
          productsList.map((product) => {
            return (
              <ProductCard
                title={product.title}
                images={product.images}
                price={product.price}
              />
            );
          })
        ) : (
          <li>products not found</li>
        )}
      </div>
    </>
  );
}
