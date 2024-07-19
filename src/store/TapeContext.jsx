import { createContext, useState } from "react";

export const TapeContext = createContext();

export const TapeProvider = ({ children }) => {
  const [mixtape, setMixtape] = useState({
    name: "",
    creator: "",
    playlist: [],
  });
  const data = { mixtape, setMixtape };

  return <TapeContext.Provider value={data}>{children}</TapeContext.Provider>;
};
