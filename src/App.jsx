import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./pages/header";
import MainPage from "./pages/mainPage";
import DetailsPage from "./pages/detailsPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path=":countryName" element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
