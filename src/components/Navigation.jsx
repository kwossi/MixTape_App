import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="create">Create</NavLink>
          </li>
          <li>
            <NavLink to="listen">Listen</NavLink>
          </li>
          <li>
            <NavLink to="share">Share</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
