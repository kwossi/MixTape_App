import React, { useContext, useState } from "react";
import { TapeContext } from "../store/TapeContext";
import { FaCloudDownloadAlt } from "react-icons/fa";

const ExportMixtape = () => {
  const { mixtapeState } = useContext(TapeContext);

  const exportMixtape = () => {
    const content = JSON.stringify(mixtapeState, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mixtapeState.name}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button className="download-button" onClick={exportMixtape}>
        <FaCloudDownloadAlt />
      </button>
      {mixtapeState.name ? (
        <div>
          <h3>{mixtapeState.name}</h3>
          <p>by: {mixtapeState.creator}</p>
        </div>
      ) : (
        <p>No mixtape yet.</p>
      )}
    </div>
  );
};

export default ExportMixtape;
