import "./resposiv/style.css";
import "./App.css";
import { Find } from "./components/Find";
import { Header } from "./components/Header";
import { OpenCountries } from "./components/OpenCountries";
import { useState } from "react";

function App() {
  const [openCountries, setOpenCountries] = useState(false);
  const [darkLight, setDarkLight] = useState(false);
  const [countriesData, setCountriesData] = useState();
  const [countriesIndex, setCountriesIndex] = useState(0);
  return (
    <>
      <Header darkLight={darkLight} setDarkLight={setDarkLight} />
      {openCountries ? (
        <OpenCountries
          countriesData={countriesData}
          countriesIndex={countriesIndex}
          setOpenCountries={setOpenCountries}
          darkLight={darkLight}
        />
      ) : (
        <Find
          darkLight={darkLight}
          setOpenCountries={setOpenCountries}
          countriesData={countriesData}
          setCountriesData={setCountriesData}
          setCountriesIndex={setCountriesIndex}
        />
      )}
    </>
  );
}

export default App;
