import React, { useContext, useEffect } from "react";
import ExportMixtape from "./ExportMixtape";
import { useLocation } from "react-router-dom";
import { TapeContext } from "../store/TapeContext";

const Share = () => {
  const { mixtapeDispatch } = useContext(TapeContext);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/share") {
      mixtapeDispatch({ type: "HIDE" });
    }
  }, [location]);
  return (
    <div className="container">
      <h1>Ready to spread the love?</h1>
      <p>
        Hit the download button and get your mix to hand it out to friends and
        loved ones. Or just keep it for yourself.{" "}
      </p>
      <ExportMixtape />
    </div>
  );
};

export default Share;
