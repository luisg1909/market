import React, { useState } from "react";
import { Product } from "../models/Product";
import { Tab, Nav, Table, Button } from "react-bootstrap";

interface ProductListProps {
  products: Product[];
  onAddToBasket: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToBasket }) => {
  const categories = ["Coffee", "Cheese", "Milk", "Fruit", "Drink", "Candy"];
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const filteredProducts = products.filter(
    (product) => product.getCategory() === activeCategory
  );

  return (
    <div className="my-4">
      <Tab.Container activeKey={activeCategory} onSelect={(k) => setActiveCategory(k || "Coffee")}>
        <Nav variant="tabs" className="justify-content-center">
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link eventKey={category}>{category}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={activeCategory}>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
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
            </Table>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductList;
