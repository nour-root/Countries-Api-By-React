import Search from "./search";
import Countries from "./counties";
import { RegionProvider } from "../Context/regionContext";
import { NameContext } from "../Context/nameContext";
import { useState } from "react";
function MainPage() {
  const [name, setName] = useState("");
  return (
    <RegionProvider>
      <div className="p-10 bg-secondary dark:bg-dark-secondary h-fit">
        <NameContext.Provider value={{ name, setName }}>
          <Search />
          <Countries />
        </NameContext.Provider>
      </div>
    </RegionProvider>
  );
}
export default MainPage;
