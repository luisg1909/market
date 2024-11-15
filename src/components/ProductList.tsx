import React from "react";
import { Product } from "../models/Product";
import { Button } from "react-bootstrap";
import { FaCoffee, FaAppleAlt, FaCheese, FaGulp } from "react-icons/fa"; // Icons for products

interface ProductListProps {
  products: Product[];
  onAddToBasket: (product: Product) => void;
}

const getProductIcon = (type: string) => {
  switch (type) {
    case "coffee":
      return <FaCoffee />;
    case "apple":
      return <FaAppleAlt />;
    case "milk":
      return <FaCheese />;
    case "soda":
      return <FaGulp />;
    default:
      return null;
  }
};

const ProductList: React.FC<ProductListProps> = ({ products, onAddToBasket }) => {
  return (
    <div className="table-responsive my-4">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{getProductIcon(product.getCategory().toLowerCase())}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <Button variant="primary" onClick={() => onAddToBasket(product)}>
                  Add to Basket
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
