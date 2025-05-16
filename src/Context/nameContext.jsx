import { createContext, useContext } from "react";
export const NameContext = createContext("");
export const useName = () => useContext(NameContext);
