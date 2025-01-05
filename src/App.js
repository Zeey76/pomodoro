import "./App.css";
import React from "react";
import FilterButtons from "./components/FilterButtons";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <img src="./icons/logo.svg" />
      <FilterButtons />
      <Timer />
    </div>
  );
}

export default App;
