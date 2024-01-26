import "./App.css";
import { Find } from "./components/Find";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [darkLight, setDarkLight] = useState(false);
  return (
    <>
      <Header darkLight={darkLight} setDarkLight={setDarkLight} />
      <Find darkLight={darkLight} />
    </>
  );
}

export default App;
