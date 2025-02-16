import { createContext, useContext } from "react";
import ScrollIndex from "../api/ScrollIndex";
import ScrollMotion from "../api/ScrollMotion";

export const ParallaxApiContext = createContext();

const scrollMotion = new ScrollMotion();
const scrollIndex = new ScrollIndex(scrollMotion);

export function ParallaxApiProvider({ children }) {
  return <ParallaxApiContext.Provider value={{scrollIndex}}>{ children}</ParallaxApiContext.Provider>
}

export function useParallaxApiContext() {
  return useContext(ParallaxApiContext);
}