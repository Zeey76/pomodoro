import "./App.css";
import React from "react";
import { useState,useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import Timer from "./components/Timer";

function App() {
  const [activeFilter, setActiveFilter] = useState("pomodoro");
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false)
  
  const timerSettings = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 10 * 60
  }

  useEffect(() => {

  })


  function handleChange(filter) {
    setActiveFilter(filter);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <img src="./icons/logo.svg" />
      <FilterButtons handleChange={handleChange} activeFilter={activeFilter}/>
      <Timer />
      <img src="./icons/icon-settings.svg" />
    </div>
  );
}

export default App;
