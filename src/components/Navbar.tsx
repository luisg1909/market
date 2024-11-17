import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Navbar as BootstrapNavbar, Nav, Badge } from "react-bootstrap";

interface NavbarProps {
  totalAmount: number;
  onBasketClick: () => void;
  role: string;
  onLogout: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ totalAmount, onBasketClick, role, onLogout }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="#">Market App</BootstrapNavbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item className="mr-3">
          Role: <strong>{role === "admin" ? "Admin" : "Regular User"}</strong>
        </Nav.Item>
        <Nav.Link onClick={onBasketClick}>
          <FaShoppingBasket size={20} />
          <Badge bg="secondary" className="ml-1">
            ${totalAmount.toFixed(2)}
          </Badge>
        </Nav.Link>
        <Nav.Link onClick={onLogout} className="ml-2">
          Logout
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
