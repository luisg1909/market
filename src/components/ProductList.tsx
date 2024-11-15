import React from "react";
import { Product } from "../models/Product";
import { Button } from "react-bootstrap";

interface ProductListProps {
  products: Product[];
  onAddToBasket: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToBasket }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
              <Button variant="primary" onClick={() => onAddToBasket(product)}>
                Add to Basket
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
