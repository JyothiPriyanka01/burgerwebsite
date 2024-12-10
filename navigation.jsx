import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Welcome to Brrrgrrr!</h1>
      <p>Select an action to get started:</p>
      <nav>
        <ul>
          <li>
            <Link to="/customize">🍔 Customize Your Burger</Link>
          </li>
          <li>
            <Link to="/orders">📋 View Orders</Link>
          </li>
          <li>
            <Link to="/help">❓ Help/Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
