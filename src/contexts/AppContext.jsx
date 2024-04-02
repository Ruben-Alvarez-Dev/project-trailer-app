import React from "react";
export const AppContext = React.createContext({
    activeMovie: null,
    setActiveMovie: () => {},
    showLightbox: null,
    setShowLightbox: () => {},
    videoId: null,
    setVideoId: () => {},
});