import React from "react";

interface NavbarProps {
  basketCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ basketCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Market App</span>
      <span className="badge badge-pill badge-secondary">{basketCount}</span>
    </nav>
  );
};

export default Navbar;
