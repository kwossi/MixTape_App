import { createContext, useState, useReducer } from "react";
import { mixtapeInitialState, mixtapeReducer } from "../reducers/reducer";

export const TapeContext = createContext();

export const TapeProvider = ({ children }) => {
  const [mixtapeState, mixtapeDispatch] = useReducer(
    mixtapeReducer,
    mixtapeInitialState
  );
  const data = { mixtapeState, mixtapeDispatch };

  return <TapeContext.Provider value={data}>{children}</TapeContext.Provider>;
};
