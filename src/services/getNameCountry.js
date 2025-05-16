import axios from "axios";
export default function GetByNameCountry(name) {
  return axios.get(`https://restcountries.com/v3.1/name/${name}`);
}
