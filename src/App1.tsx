import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import { productsData } from "./data/productData";
import { Product } from "./models/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [basket, setBasket] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [role, setRole] = useState<string>("regular"); // User role: "regular" or "admin"

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

  const totalAmount = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container my-4">
      <Navbar
        totalAmount={totalAmount}
        onBasketClick={() => setShowCheckout(true)}
      />
      {showCheckout ? (
        <CheckoutPage basket={basket} />
      ) : (
        <ProductList
          products={products}
          role={role} // Pass user role
          onAddToBasket={addToBasket}
          onEditProduct={handleEditProduct} // Pass edit function for admins
        />
      )}
    </div>
  );
};

export default App;
