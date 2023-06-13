import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <Link to="/">
      <div className="na">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Nav;
