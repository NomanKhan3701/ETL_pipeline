import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar container">
      <Link to="/">
        <div className="logo">
          <div className="circles"></div>
          <div className="text">Bifrost</div>
        </div>
      </Link>
      <div className="utils">
        <Link to="/login">
          <div className="btn_primary">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
