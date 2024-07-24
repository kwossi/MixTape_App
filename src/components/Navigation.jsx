import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <div className="link-box">
              <NavLink to="create">Create</NavLink>
            </div>
          </li>
          <li>
            <div className="link-box">
              <NavLink to="listen">Listen</NavLink>
            </div>
          </li>
          <li>
            <div className="link-box">
              <NavLink to="share">Share</NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
