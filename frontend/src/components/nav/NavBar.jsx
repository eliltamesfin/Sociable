import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className="text-4xl text-orange-500 font-extrabold mr-4"
        >
          Home
        </NavLink>
      </nav>
    </div>
  );
}
