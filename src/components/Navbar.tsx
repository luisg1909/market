import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Navbar as BootstrapNavbar, Nav, Badge } from "react-bootstrap";

interface NavbarProps {
  totalAmount: number;
  onBasketClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ totalAmount, onBasketClick }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="/">Market App</BootstrapNavbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link onClick={onBasketClick}>
          <FaShoppingBasket size={20} />
          <Badge bg="secondary" className="ml-1">
            ${totalAmount.toFixed(2)}
          </Badge>
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
