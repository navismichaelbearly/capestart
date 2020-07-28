import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Header = () => (
  <header className="header-container">
    <Link to="/authors">Authors</Link>
    <Link to="/">Books</Link>
  </header>
);

export default Header;
