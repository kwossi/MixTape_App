import React, { useContext, useState } from "react";
import { TapeContext } from "../store/TapeContext";

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
      <button onClick={exportMixtape}>Export Mixtape</button>
      <ul className="export-list">
        {mixtapeState.playlist.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExportMixtape;
