import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import Timer from "./components/Timer";

function App() {
  const [activeFilter, setActiveFilter] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const timerSettings = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 10 * 60,
  };

  useEffect(() => {
    let timer;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (secondsLeft <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  function handleChange(filter) {
    setActiveFilter(filter);
    setIsRunning(false);
    setSecondsLeft(timerSettings[filter]);
  }

  const toggleTimer = () => {
    if (!isRunning && secondsLeft === 0) {
      setSecondsLeft(timerSettings[activeFilter]);
    }
    setIsRunning(!isRunning);
  };

  function formatTime(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <img src="./icons/logo.svg" />
      <FilterButtons handleChange={handleChange} activeFilter={activeFilter} />
      <Timer
        formatTime={formatTime}
        secondsLeft={secondsLeft}
        toggleTimer={toggleTimer}
        isRunning={isRunning}
      />
      <img src="./icons/icon-settings.svg" />
    </div>
  );
}

export default App;
