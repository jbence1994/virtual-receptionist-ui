import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ routes }) => {
  return (
    <header>
      <nav>
        {routes.map((route) => (
          <NavLink key={route.name} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
