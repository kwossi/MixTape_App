import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
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
    </div>
  );
};

export default Navigation;
