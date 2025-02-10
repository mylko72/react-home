import { createContext, useContext } from "react";
import ScrollIndex from "../api/ScrollIndex";

export const ParallaxApiContext = createContext();

const scrollIndex = new ScrollIndex();

export function ParallaxApiProvider({ children }) {
  return <ParallaxApiContext.Provider value={{scrollIndex}}>{ children}</ParallaxApiContext.Provider>
}

export function useParallaxApiContext() {
  return useContext(ParallaxApiContext);
}