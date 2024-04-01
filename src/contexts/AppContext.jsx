import React from "react";
export const AppContext = React.createContext({
    activeMovie: null,
    setActiveMovie: () => {}
});