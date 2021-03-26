import { createContext, useContext, useReducer } from "react";

// this is data layer
export const StateContext=createContext();

// build a provider

export const StateProvider=({reducer , initialState, children })=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
// to use in different component
export const useStateValue=()=>useContext(StateContext);