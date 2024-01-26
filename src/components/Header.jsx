import "../styles/header.css";
import moon from "../assets/icon-moon.svg";

export const Header = (props) => {
  return (
    <>
      <div
        className={`container h-20 relative flex justify-center w-full z-10  ${
          props.darkLight ? "bg-white" : "bg-dark"
        }`}
      >
        <div className="center-box h-20 flex justify-between items-center w-11/12">
          <h1
            className={`title text-2xl font-extrabold ${
              props.darkLight ? "text-black" : "text-white"
            }`}
          >
            Where in the world?
          </h1>
          <button
            onClick={() => props.setDarkLight(!props.darkLight)}
            className={`dark-light h-4.5 flex items-center gap-2 font-semibold cursor-pointer ${
              props.darkLight ? "text-black" : "text-white"
            }`}
          >
            <img className="mb-1" src={moon} alt="moon" />
            Dark Mode
          </button>
        </div>
      </div>
    </>
  );
};
