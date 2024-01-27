import "../styles/find.css";
import search from "../assets/icon-search.svg";
import { Countrie } from "../components/Countrie";
import { useState } from "react";
import { Arrow } from "../icon/Arrow";

export const Find = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [notFound, setNotFound] = useState("");
  const [regionFilter, setRegionFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchFunction = async (e) => {
    try {
      setNotFound("");
      e.preventDefault();
      setLoading(true);
      const searchApi = await fetch(
        `https://restcountries.com/v3.1/name/${searchInput}`
      );
      const searchData = await searchApi.json();
      if (searchData.status === 404) {
        throw new Error("Not found");
      } else {
        setNotFound("");
        props.setCountriesData(searchData);
      }
    } catch (err) {
      setNotFound(err.message);
    }
    setLoading(false);
  };

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const byRegion = async (region) => {
    const regionApi = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const regionData = await regionApi.json();

    props.setCountriesData(regionData);
  };

  return (
    <>
      <div
        className={`countrie-container flex flex-col items-center w-full h-max ${
          props.darkLight ? "bg-cream" : "bg-body"
        }`}
      >
        <div className="search-continents flex justify-between items-center w-11/12 h-20 mt-20">
          <form
            className={`flex gap-6 rounded ${
              props.darkLight ? "bg-white" : "bg-dark"
            }`}
            onSubmit={searchFunction}
          >
            <img className="ms-5" src={search} alt="search" />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className={`search w-96 h-14 rounded p-4 ${
                props.darkLight ? "bg-white" : "bg-dark text-white"
              }`}
              type="text"
              placeholder="Search for a country…"
            />
          </form>
          <span className="text-3xl text-white">{notFound}</span>
          {loading && <span className="loader"></span>}

          <button
            onClick={() => setRegionFilter(!regionFilter)}
            className={`select-region px-6 rounded flex justify-between items-center ${
              props.darkLight ? "bg-white" : "bg-dark text-white"
            }`}
          >
            Filter by region
            <Arrow darkLight={props.darkLight} />
          </button>
          <div
            className={`region-filter absolute rounded-md right-20 bottom-14 flex flex-col items-start p-4 gap-1 px-6 ${
              props.darkLight ? "bg-white" : "bg-dark text-white"
            } ${regionFilter ? "open" : ""}`}
          >
            {regions.map((item) => (
              <button key={item} onClick={() => byRegion(item)} className="da">
                {item}
              </button>
            ))}
          </div>
        </div>
        <Countrie
          darkLight={props.darkLight}
          countriesData={props.countriesData}
          setCountriesData={props.setCountriesData}
          setOpenCountries={props.setOpenCountries}
          setCountriesIndex={props.setCountriesIndex}
        />
      </div>
    </>
  );
};
