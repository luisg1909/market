import React from "react";
import { Product } from "../models/Product";
import { Button } from "react-bootstrap";

interface CheckoutPageProps {
  basket: Product[];
  onClearBasket: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ basket, onClearBasket }) => {
  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
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
      <Button variant="success" onClick={() => alert("Payment Successful!")} className="mr-2">
        Confirm Payment
      </Button>
      <Button variant="secondary" onClick={onClearBasket}>
        Clear Basket
      </Button>
    </div>
  );
};

export default CheckoutPage;
