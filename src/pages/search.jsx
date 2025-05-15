import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
function Search() {
  return (
    <div className="flex justify-between max-md:flex-col max-md:gap-4">
      <form
        action=""
        className=" flex items-center gap-4 bg-primary rounded shadow min-w-1/3 px-4 py-3"
      >
        <button>
          <AiOutlineSearch className="text-2xl text-Text" />
        </button>
        <input
          type="text"
          placeholder="Enter Country"
          className="focus:outline-0"
        />
      </form>
      <div className="relative w-[250px] flex items-center justify-between bg-primary rounded shadow px-8 h-14">
        <p>Filter By Region</p>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute shadow hidden z-10  bg-primary top-16 left-0  h-fit w-1/1 py-2 rounded">
          <p className="cursor-pointer hover:bg-secondary px-4 py-[5px]">
            Africa
          </p>
          <p className="cursor-pointer hover:bg-secondary px-4 py-[5px]">
            America
          </p>
          <p className="cursor-pointer hover:bg-secondary px-4 py-[5px]">
            Asia
          </p>
          <p className="cursor-pointer hover:bg-secondary px-4 py-[5px]">
            Europe
          </p>
          <p className="cursor-pointer hover:bg-secondary px-4 py-[5px]">
            Oceania
          </p>
        </div>
      </div>
    </div>
  );
}
export default Search;
