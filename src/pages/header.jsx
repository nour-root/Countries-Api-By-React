import { IoMoonOutline } from "react-icons/io5";
function Header() {
  return (
    <header className="relative z-10 bg-primary shadow flex justify-between px-8 py-6">
      <h1 className="capitalize font-semibold text-xl">where in the world </h1>
      <button className="font-semibold flex items-center gap-2">
        <IoMoonOutline className="text-xl" />
        <p>Dark Mode</p>
      </button>
    </header>
  );
}
export default Header;
