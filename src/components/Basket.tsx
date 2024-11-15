import React from "react";
import { Product } from "../models/Product";

interface BasketProps {
  basket: Product[];
  onClearBasket: () => void;
}

const Basket: React.FC<BasketProps> = ({ basket, onClearBasket }) => {
  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h3>Your Basket</h3>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={onClearBasket} className="btn btn-danger">
        Clear Basket
      </button>
    </div>
  );
};

export default Basket;
