import Search from "./search";
import Countries from "./counties";

function MainPage() {
  return (
    <div className="p-10 bg-secondary dark:bg-dark-secondary h-fit">
      <Search />
      <Countries />
    </div>
  );
}
export default MainPage;
