import Search from "./search";
import Countries from "./counties";
import { RegionProvider } from "../Context/regionContext";
import { NameContext } from "../Context/nameContext";
import { useState } from "react";
import { LoadingContext } from "../Context/loadingContext";
function MainPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  return (
    <RegionProvider>
      <div className="p-10 bg-secondary dark:bg-dark-secondary h-fit">
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <NameContext.Provider value={{ name, setName }}>
            <Search />
            <Countries />
          </NameContext.Provider>
        </LoadingContext.Provider>
      </div>
    </RegionProvider>
  );
}
export default MainPage;
