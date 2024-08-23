import React, { useContext, useEffect } from "react";
import Player from "./Player";
import { useLocation } from "react-router-dom";
import { TapeContext } from "../../store/TapeContext";

const Listen = () => {
  const { mixtapeDispatch } = useContext(TapeContext);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/listen") {
      mixtapeDispatch({ type: "HIDE" });
    }
  }, [location]);

  return (
    <div className="container">
      <Player />
    </div>
  );
};

export default Listen;
