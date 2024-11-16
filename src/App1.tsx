import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import CheckoutPage from "./components/CheckoutPage";
import { Product } from "./models/Product";
import { productsData } from "./data/productData";

const App: React.FC = () => {
  const [products] = useState<Product[]>(productsData);
  const [basket, setBasket] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  const addToBasket = (product: Product) => {
    setBasket([...basket, product]);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const handleBasketClick = () => {
    setShowCheckout(true);
  };

  return (
    <div className="container my-4">
      <Navbar totalAmount={totalAmount} onBasketClick={handleBasketClick} />
      {showCheckout ? (
        <CheckoutPage basket={basket} onClearBasket={clearBasket} />
      ) : (
        <ProductList products={products} onAddToBasket={addToBasket} />
      )}
    </div>
  );
};

export default App;
