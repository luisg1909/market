import React, { useState } from "react";
import { Tab, Nav, Table, Button, Form } from "react-bootstrap";
import { Product } from "../models/Product";

interface ProductListProps {
  products: Product[];
  role: string; // User role: "regular" or "admin"
  onAddToBasket: (product: Product) => void;
  onEditProduct: (product: Product) => void; // Callback for editing products
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  role,
  onAddToBasket,
  onEditProduct,
}) => {
  const categories = ["Coffee", "Cheese", "Milk", "Fruit", "Drink", "Candy"];
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const filteredProducts = products.filter(
    (product) => product.getCategory() === activeCategory
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: number,
    field: string
  ) => {
    const updatedProduct = filteredProducts.find(
      (product) => product.id === productId
    );
    if (updatedProduct) {
      const newValue =
        field === "price" ? parseFloat(e.target.value) : e.target.value;
  
      // Create a new instance of the same product subclass
      const updatedProductInstance = Object.assign(
        Object.create(Object.getPrototypeOf(updatedProduct)),
        updatedProduct,
        { [field]: newValue }
      );
  
      // Pass the updated instance back
      onEditProduct(updatedProductInstance as Product);
    }
  };
  const FinishPayment = () => {
  }
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
                    {role === "admin" ? (
                      <>
                        <td>
                          <Form.Control
                            type="text"
                            value={product.name}
                            onChange={(e) =>
                              handleInputChange(e as React.ChangeEvent<HTMLInputElement>, product.id, "name")
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            value={product.description}
                            onChange={(e) =>
                              handleInputChange(e as React.ChangeEvent<HTMLInputElement>, product.id, "description")
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            value={product.price}
                            onChange={(e) =>
                              handleInputChange(e as React.ChangeEvent<HTMLInputElement>, product.id, "price")
                            }
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>${product.price.toFixed(2)}</td>
                      </>
                    )}
                    <td>
                  
                        <Button
                          variant="primary"
                          onClick={() => onAddToBasket(product)}
                        >
                          Add to Basket
                        </Button>
                  
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="success" onClick={FinishPayment}>
        Finish Payment
      </Button>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductList;
