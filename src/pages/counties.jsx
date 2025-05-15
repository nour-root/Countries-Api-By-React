import { useState, useEffect } from "react";
import Card from "./card.jsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GetAllCountries from "../services/getAllCountries.js";

function Countries() {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState([]);
  useEffect(() => {
    GetAllCountries()
      .then((res) => {
        setCity(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="py-16 grid lg:grid-cols-4 gap-6 max-sm:grid-cols-1 md:grid-cols-2">
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin absolute left-1/2 top-1/2 text-6xl" />
      ) : (
        city.map((c) => (
          <Card country={c} key={c.name.common + "-" + c.name.official} />
        ))
      )}
    </div>
  );
}

export default Countries;
