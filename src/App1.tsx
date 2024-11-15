import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import { Product } from "./models/Product";
import { Coffee } from "./models/Coffee";
import { Milk } from "./models/Milk";
import { Soda } from "./models/Soda";
import { Apple } from "./models/Apple"; // Import the Apple class
import productsData from "./data/products.json";

const App: React.FC = () => {
  // Map JSON data to Product instances
  const mappedProducts: Product[] = productsData.map((item) => {
    switch (item.type) {
      case "coffee":
        return new Coffee(item.id, item.name, item.description, item.price);
      case "milk":
        return new Milk(item.id, item.name, item.description, item.price);
      case "soda":
        return new Soda(item.id, item.name, item.description, item.price);
      case "apple":
        return new Apple(item.id, item.name, item.description, item.price); // Handle apple type
      default:
        throw new Error(`Unknown product type: ${item.type}`);
    }
  });

  const [products] = useState<Product[]>(mappedProducts);
  const [basket, setBasket] = useState<Product[]>([]);

  const addToBasket = (product: Product) => {
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
  };

  const clearBasket = () => {
    setBasket([]);
    localStorage.removeItem("basket");
  };

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  return (
    <div className="container">
      <Navbar basketCount={basket.length} />
      <h1>Welcome to the Market</h1>
      <ProductList products={products} onAddToBasket={addToBasket} />
      <Basket basket={basket} onClearBasket={clearBasket} />
    </div>
  );
};

export default App;
