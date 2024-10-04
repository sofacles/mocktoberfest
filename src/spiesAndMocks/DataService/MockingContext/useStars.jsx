import React, { createContext, useContext} from "react";

const initialState = {star: "Orion"};

export const StarsContext = createContext(initialState);

export const StarsProvider = (props) => {
    return (<StarsContext.Provider value={{stars: initialState }}>{props.children}</StarsContext.Provider>)
}
export const useStarsContext = () => useContext(StarsContext);