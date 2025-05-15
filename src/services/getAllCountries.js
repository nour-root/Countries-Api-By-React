import axios from "axios";
export default function GetAllCountries() {
  return axios.get("https://restcountries.com/v3.1/all");
}
