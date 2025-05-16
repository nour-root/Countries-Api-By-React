import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useRegion } from "../Context/regionContext";
import { useName } from "../Context/nameContext";
import { useLoading } from "../Context/loadingContext";
function Search() {
  const { setRegion } = useRegion();
  const { name, setName } = useName();
  const { loading } = useLoading();
  return (
    <div className="flex justify-between max-md:flex-col max-md:gap-4">
      <div className=" flex items-center gap-4 bg-primary dark:bg-dark-primary rounded shadow min-w-1/3 px-4 py-3">
        <button>
          <AiOutlineSearch className="text-2xl text-Text dark:text-white" />
        </button>
        <input
          value={name}
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Country"
          className="focus:outline-0 dark:text-white capitalize disabled:opacity-50"
        />
      </div>
      <div
        style={{
          pointerEvents: loading ? "none" : "auto",
          cursor: loading ? "no-drop" : "pointer",
        }}
        onClick={() => {
          document.querySelector(".dropDown").classList.toggle("scale-100");
          document.querySelector(".arrow").classList.toggle("rotate-180");
        }}
        className="relative dark:text-white cursor-pointer pointer-events-auto w-[250px] flex items-center justify-between bg-primary dark:bg-dark-primary rounded shadow px-8 h-14"
      >
        <p>Filter By Region</p>
        <IoIosArrowDown className="mt-1 arrow transform rotate-0 transition-all duration-200" />
        <div
          onClick={(e) => setRegion(e.target.innerText)}
          className="absolute overflow-hidden *:hover:bg-secondary *:hover:dark:bg-dark-secondary dropDown shadow transition-all duration-150 transform origin-top scale-0 z-10  bg-primary dark:bg-dark-primary top-16 left-0  h-fit w-1/1 rounded"
        >
          <p className="cursor-pointer px-4 py-2">Africa</p>
          <p className="cursor-pointer px-4 py-2">America</p>
          <p className="cursor-pointer px-4 py-2">Asia</p>
          <p className="cursor-pointer px-4 py-2">Europe</p>
          <p className="cursor-pointer px-4 py-2">Oceania</p>
        </div>
      </div>
    </div>
  );
}
export default Search;
