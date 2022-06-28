import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="nav-body">
        <div className="title">ALUS</div>
        <div className="nav-comp">
          <div className="nav-item">
            <Link to="/">
              <p className="font">HOME</p>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/about">
              <p className="font">ABOUT</p>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/contact">
              <p className="font">CONTACT</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
