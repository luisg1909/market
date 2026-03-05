import React from "react";
import { Product } from "../models/Product";
import { Button } from "react-bootstrap";

interface BasketProps {
  basket: Product[];
  onClearBasket: () => void;
}

const Basket: React.FC<BasketProps> = ({ basket, onClearBasket }) => {
  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="my-4">
      <h3>Your Basket</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-weight-bold">Total: ${total}</p>
      <Button variant="danger" onClick={onClearBasket} className="mr-2">
        Clear Basket
      </Button>
      <Button variant="success" onClick={() => alert("Payment Complete!")}>
        Finish Payment 
      </Button>
    </div>
  );
};

export default Basket;
