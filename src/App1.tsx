import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productsData } from "./data/productData";
import { Product } from "./models/Product";
import PDFViewerPage from "./components/PDFViewerPage";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [basket, setBasket] = useState<Product[]>([]);
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
    setBasket([]); // Empty the basket

  };

  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <Router>
      <div className="container my-4">
        {role ? (
          <>
            <Navbar
              totalAmount={totalAmount}
              onBasketClick={() => null}
              onLogout={handleLogout}
              role={role}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    products={products}
                    role={role}
                    basket={basket}
                    onAddToBasket={addToBasket}
                    onEditProduct={handleEditProduct}
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <CheckoutPage
                    basket={basket}
                    onClearBasket={clearBasket} // Pass clearBasket function as a prop
                  />
                }
              />
              <Route path="/pdf-viewer" element={<PDFViewerPage />} />
            </Routes>
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
