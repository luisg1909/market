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
    <BootstrapNavbar bg="light" expand="lg" className="px-3">
      <div className="d-flex justify-content-between w-100 align-items-center">
      
        <div className="d-flex align-items-center">
          <BootstrapNavbar.Brand href="/" className="mb-0">
            Market App
          </BootstrapNavbar.Brand>
          <span className="ml-3">
            Role: <strong>{role === "admin" ? "Admin" : "Regular User"}</strong>
          </span>
        </div>

       
        <div className="d-flex align-items-center">
          <Nav.Link onClick={onBasketClick} className="d-flex align-items-center">
            <FaShoppingBasket size={20} />
            <Badge bg="secondary" className="ml-2">
              ${totalAmount.toFixed(2)}
            </Badge>
          </Nav.Link>
          <Nav.Link onClick={onLogout} className="ml-3">
            Logout
          </Nav.Link>
        </div>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
