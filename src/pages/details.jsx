import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Details({ country }) {
  const [borderCountries, setBorderCountries] = useState([]);
  useEffect(() => {
    if (country.borders && country.borders.length > 0) {
      const fetchBorderCountries = async () => {
        try {
          const codes = country.borders.join(",");
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${codes}`
          );
          setBorderCountries(response.data);
        } catch (error) {
          console.error("Error fetching border countries", error);
        }
      };
      fetchBorderCountries();
    } else {
      setBorderCountries([]);
    }
  }, [country]);
  return (
    <>
      <div className="w-full">
        <Link to={"/"}>
          <button className="dark:text-white text-2xl bg-primary cursor-pointer shadow flex items-center space-x-2 dark:bg-dark-primary px-3 py-2 rounded">
            <FaArrowLeft />
            <p>Back</p>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 w-full py-10 gap-10">
        <img
          src={`${country.flags.png}`}
          className="w-full h-full border dark:border-white border-Text"
          alt={`${country.flags.alt}`}
        />
        <div className="space-y-8">
          <h2 className="dark:text-white text-2xl font-bold">
            {country.name.common}
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="text-lg flex-col space-y-3 dark:text-white">
              <p>
                Native Name:
                <span className="text-Text">
                  {" " +
                    Object.values(country.name.nativeName).map(
                      (n) => `${n.common}`
                    )}
                </span>
              </p>
              <p>
                Population:
                <span className="text-Text">
                  {" " + parseInt(country.population).toLocaleString()}
                </span>
              </p>
              <p>
                Region:
                <span className="text-Text">{" " + country.region}</span>
              </p>
              <p>
                Sub Region:
                <span className="text-Text">{" " + country.subregion}</span>
              </p>
              <p>
                Capital:
                <span className="text-Text">{" " + country.capital}</span>
              </p>
            </div>
            <div className="space-y-1 dark:text-white">
              <div className="text-lg flex-col space-y-3">
                <p>
                  Top Level Domain:
                  <span className="text-Text"> {country.tld[0]}</span>
                </p>
                <p>
                  Currencies:
                  <span className="text-Text">
                    {" "}
                    {Object.values(country.currencies).map(
                      (c) => `${c.symbol}`
                    )}
                  </span>
                </p>
                <p>
                  Language:
                  <span className="text-Text">
                    {" " +
                      Object.values(country.languages).map((l) => ` ${l} `)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-md:flex-wrap">
            <h2 className="text-xl font-semibold max-md:mb-4 dark:text-white">
              Border Countries :
            </h2>
            <div className="flex gap-3 ml-1 max-md:w-full justify-center flex-wrap">
              {borderCountries.length > 0 ? (
                borderCountries.map((borderCountry) => (
                  <Link
                    key={
                      borderCountry.name.common +
                      "-" +
                      borderCountry.name.official
                    }
                    to={`/${borderCountry.name.common}`}
                  >
                    <span className="border border-slate-300 hover:bg-slate-200 duration-150 px-5 py-1 text-center h-fit text-Text">
                      {borderCountry.name.common}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="dark:text-white"> &nbsp; No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
