import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GetByNameCountry from "../services/getNameCountry";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Details from "./details";
export default function DetailsPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetByNameCountry(countryName)
      .then((res) => {
        setCountry(res.data[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [countryName]);
  return (
    <div className="dark:bg-dark-secondary h-lvh p-10">
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin dark:text-white text-[100px] absolute transform -translate-1/2 left-1/2 top-1/2" />
      ) : (
        <Details country={country} />
      )}
    </div>
  );
}
