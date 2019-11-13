import React, { useReducer, useContext, createContext } from "react";
export const StateContext = createContext();
// wrapper for state
export const StateWrapper = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext); // CUSTOMhOOK WHICH USES THE STATE
