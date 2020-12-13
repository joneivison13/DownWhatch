import React, { createContext, useState } from "react";

export const Context = createContext({
  videos: [],
  setVideos: () => null,
});

export default function ContextProvider({ children }) {
  const [videos, setVideos] = useState([]);
  return (
    <Context.Provider value={{ videos, setVideos }}>
      {children}
    </Context.Provider>
  );
}
