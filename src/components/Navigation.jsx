import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="listen">
              Listen
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="share">
              Share
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
