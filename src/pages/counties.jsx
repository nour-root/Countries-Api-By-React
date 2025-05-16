import { useState, useEffect } from "react";
import Card from "./card.jsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GetAllCountries from "../services/getAllCountries.js";
import { useRegion } from "../Context/regionContext.jsx";
import axios from "axios";
import { useName } from "../Context/nameContext.jsx";
import { useLoading } from "../Context/loadingContext.jsx";
function Countries() {
  const { region } = useRegion();
  const { name } = useName();
  const { loading, setLoading } = useLoading();
  const [city, setCity] = useState([]);
  useEffect(() => {
    if (name) {
      const fetchNameCountries = async () => {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${name}`
          );
          setCity(response.data);
        } catch (error) {
          console.error("Error fetching border countries", error);
        }
        setLoading(false);
      };
      fetchNameCountries();
    } else if (region) {
      const fetchRegionCountries = async () => {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/region/${region}`
          );
          setCity(response.data);
        } catch (error) {
          console.error("Error fetching border countries", error);
        }
        setLoading(false);
      };
      fetchRegionCountries();
    } else {
      GetAllCountries()
        .then((res) => {
          setCity(res.data);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [region, name, loading]);

  return (
    <div className="py-16 grid lg:grid-cols-4 gap-8 max-sm:grid-cols-1 md:grid-cols-2 h-[1000vh]">
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin absolute left-1/2 top-1/2 text-6xl dark:text-white" />
      ) : (
        city.map((c) => (
          <Card country={c} key={c.name.common + "-" + c.name.official} />
        ))
      )}
    </div>
  );
}

export default Countries;
