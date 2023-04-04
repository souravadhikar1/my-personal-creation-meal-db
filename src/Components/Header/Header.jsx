import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" bg-purple-500 py-6 border-r-4 ">
      <div className=" ml-96 md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
