import React, { useContext, useState } from "react";
import { TapeContext } from "../store/TapeContext";
import { FaCloudUploadAlt } from "react-icons/fa";

const ImportMixtape = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  const [file, setFile] = useState(null);

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImport = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          const importedMixtape = JSON.parse(content);
          if (importedMixtape.playlist) {
            mixtapeDispatch({ type: "IMPORT", payload: importedMixtape });
          } else {
            alert("Invalid JSON format: must be a mixtape.");
          }
        } catch (error) {
          alert("Failed to parse JSON: " + error.message);
        }
      };
      reader.readAsText(file);
    } else {
      alert("No file selected");
    }
  };

  return (
    <div className="import-container">
      <input
        className="browse"
        type="file"
        accept=".json"
        onChange={changeFile}
      />
      <button className="import-button" onClick={handleImport}>
        <FaCloudUploadAlt />
      </button>
    </div>
  );
};

export default ImportMixtape;
