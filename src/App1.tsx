import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import { productsData } from "./data/productData";
import { Product } from "./models/Product";
import LoginPage from "./components/LoginPage";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [basket, setBasket] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [role, setRole] = useState<string | null>(null); // Tracks user role: "regular" or "admin"

  const addToBasket = (product: Product) => {
    setBasket([...basket, product]);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  // Handle Login
  const handleLogin = (role: string) => {
    setRole(role);
  };

  // Logout
  const handleLogout = () => {
    setRole(null);
  };
  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container my-4">
      {role ? (
        <>
          <Navbar
            totalAmount={basket.reduce((sum, product) => sum + product.price, 0)}
            onBasketClick={() => setShowCheckout(true)}
            onLogout={handleLogout}
            role={role}
          />
          {showCheckout ? (
        <CheckoutPage basket={basket} />
      )  : (
            <ProductList
              products={products}
              role={role}
              onAddToBasket={addToBasket}
              onEditProduct={handleEditProduct}
            />
          )}
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />

      )}
    </div>
  );
};

export default App;
