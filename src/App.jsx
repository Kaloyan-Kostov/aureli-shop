import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { defaultURL } from "./helpers/constants";
import Crucials from "./components/Navbar/Sections/Crucials";
import New from "./components/Navbar/Sections/New";
import withLoading from "./hoc/PageLoader";

const HeroWithLoading = withLoading(Hero);
const NewWithLoading = withLoading(New);
const CrucialsWithLoading = withLoading(Crucials);

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path={`${defaultURL}/`} element={<HeroWithLoading />} />
        <Route path={`${defaultURL}/new`} element={<NewWithLoading />} />
        <Route
          path={`${defaultURL}/label/:labelName`}
          element={<CrucialsWithLoading />}
        />
      </Routes>
    </BrowserRouter>
  );
}
