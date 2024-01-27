import "../styles/countrie.css";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";

export const Countrie = (props) => {
  const [countries, setCountrie] = useState();

  useEffect(() => {
    const fatch = async () => {
      const api = await fetch("https://restcountries.com/v3.1/all?fields");
      const response = await api.json();
      props.setCountriesData(response);
    };
    fatch();
  }, []);

  const openFunction = (index) => {
    props.setOpenCountries(true);
    props.setCountriesIndex(index);
  };

  useEffect(() => {
    if (props.countriesData) {
      const countries = props.countriesData.map((item, index) => {
        return (
          <LazyLoad height={400} offset={100} key={index}>
            <button onClick={() => openFunction(index)}>
              <div
                className={`countrie-box w-72 h-336 rounded ${
                  props.darkLight ? "bg-white" : "bg-dark"
                }`}
              >
                <img className="h-300 rounded-t" src={item.flags.png} alt="" />
                <div className={`countrie-info  p-6 text-start flex-col`}>
                  <h1
                    className={`font-bold text-lg ${
                      props.darkLight ? "" : "text-white"
                    }`}
                  >
                    {item.name.common}
                  </h1>

                  <ul className="mt-2">
                    <li className={`${props.darkLight ? "" : "text-white"}`}>
                      <span className="font-semibold">Population:</span>{" "}
                      {item.population}
                    </li>
                    <li className={`${props.darkLight ? "" : "text-white"}`}>
                      <span className="font-semibold">Region:</span>{" "}
                      {item.region}
                    </li>
                    <li className={`${props.darkLight ? "" : "text-white"}`}>
                      <span className="font-semibold">Capital:</span>{" "}
                      {item.capital}
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </LazyLoad>
        );
      });
      setCountrie(countries);
    }
  }, [props.countriesData, props.darkLight]);

  return (
    <>
      <div
        className={`countries-container flex justify-center w-full mt-20 ${
          props.darkLight ? "bg-cream" : "bg-body"
        }`}
      >
        <div className="countries w-11/12  flex flex-wrap justify-center">
          {countries}
        </div>
      </div>
    </>
  );
};
