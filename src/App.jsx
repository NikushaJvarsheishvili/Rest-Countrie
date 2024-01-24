import "./App.css";
import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [darkLight, setDarkLight] = useState(true);
  return (
    <>
      <Header darkLight={darkLight} setDarkLight={setDarkLight} />
      <Countries darkLight={darkLight} />
    </>
  );
}

export default App;
