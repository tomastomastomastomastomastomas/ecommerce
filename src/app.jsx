import { useState, useEffect } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import ProductsList from "./components/product-list/products-list.jsx";
import NavBar from "./components/nav-bar/nav-bar.jsx";

export function App() {
  return (
    <>
      <NavBar />
      <ProductsList />
    </>
  );
}
