import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header-container">
      <div>MIXTAPEEEES</div>
      <div>
        <a className="logo" href="/">
          home
        </a>{" "}
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
