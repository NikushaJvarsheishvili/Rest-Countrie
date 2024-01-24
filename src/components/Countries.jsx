import "../styles/countries.css";

export const Countries = (props) => {
  return (
    <>
      <div
        className={`countrie-container w-full h-max relative z-00 ${
          props.darkLight ? "bg-white" : "bg-body"
        }`}
      >
        <div className="search-continents w-11/12"></div>
      </div>
    </>
  );
};
