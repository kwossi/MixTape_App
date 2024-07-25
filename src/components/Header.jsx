import React from "react";
import Navigation from "./Navigation";
import { PiCassetteTapeDuotone } from "react-icons/pi";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <a className="logo" href="/">
          <PiCassetteTapeDuotone />
        </a>
      </div>
      <h1>TapeTunes</h1>

      <Navigation />
    </div>
  );
};

export default Header;
