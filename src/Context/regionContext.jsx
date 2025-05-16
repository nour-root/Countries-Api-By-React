import { createContext, useState, useContext } from "react";
export const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState("");
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => useContext(RegionContext);
