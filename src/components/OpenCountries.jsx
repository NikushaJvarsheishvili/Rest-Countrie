import "../styles/open-countries.css";
import "../resposiv/style.css";
import { Back } from "../icon/Back";

export const OpenCountries = (props) => {
  const chosenCountries = props.countriesData[props.countriesIndex];
  console.log(chosenCountries);
  return (
    <div
      className={`open-container ${
        props.darkLight ? "bg-white" : "bg-body"
      }  w-full h-999 flex flex-col  items-center`}
    >
      <div className="button-container w-11/12 mb-20 mt-20">
        <button
          className={`back-button rounded-md bg-dark text-white flex items-center justify-start gap-3 px-6 ${
            props.darkLight ? "bg-white text-dark" : "bg-dark text-white"
          }`}
          onClick={() => props.setOpenCountries(false)}
        >
          <Back darkLight={props.darkLight} />
          Back
        </button>
      </div>
      <div className="open-center-box w-11/12  flex justify-center gap-32">
        <div className="image-side w-2/4">
          <img
            className="rounded-md open-flag"
            src={chosenCountries.flags.svg}
            alt=""
          />
        </div>
        <div className="info-side  w-1/4  flex flex-col gap-10 mt-10">
          <h1 className={`text-3xl ${props.darkLight ? "" : "text-white"} `}>
            {chosenCountries.capital}
          </h1>
          <div className="flex gap-20 nika">
            <div className="info-left-side ">
              <ul
                className={`${
                  props.darkLight ? "" : "text-white"
                } flex flex-col gap-3`}
              >
                <li>
                  <b>Population: </b>
                  {chosenCountries.population}
                </li>
                {chosenCountries.subregion ? (
                  <li>
                    <b>Sub Region: </b>
                    {chosenCountries.subregion}
                  </li>
                ) : null}

                <li>
                  <b>Capital: </b>
                  {chosenCountries.capital}
                </li>
              </ul>
            </div>
            <div className="info-right-side">
              <ul className={`${props.darkLight ? "" : "text-white"}`}>
                <li>
                  <b>Top Level Domain: </b>
                  {chosenCountries.tld}
                </li>
                {/* <li>
                  <b>Currencies: </b>
                  {chosenCountries.currencies.EUR.name}
                </li> */}
                {/* <li>
                  <b>Languages: </b>
                  {chosenCountries.languages.fra}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
