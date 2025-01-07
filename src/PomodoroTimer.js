import React, { useState } from "react";
import { useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import Timer from "./components/Timer";
import { usePomodoro } from "./PomodoroContext";
import Settings from "./components/Settings";

function PomodoroTimer() {
  const { state, dispatch } = usePomodoro();
  const { mode, secondsLeft, isRunning } = state;
  const [isSettingOpen, setIsSettingsOpen] = useState(false)

  useEffect(() => {
    let timer;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        dispatch({ type: "Decrement" });
      }, 1000);
    }

    if (secondsLeft === 0) {
      dispatch({ type: "RestartTimer" });
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft, dispatch]);

  function handleSettings() {
    setIsSettingsOpen(!isSettingOpen)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <img src="./icons/logo.svg" />
      <FilterButtons dispatch={dispatch} mode={mode} />
      <Timer
        isRunning={isRunning}
        secondsLeft={secondsLeft}
        dispatch={dispatch}
      />
      <img src="./icons/icon-settings.svg" onClick={handleSettings}/>
      {isSettingOpen && <Settings handleSettings={handleSettings}/>}
    </div>
  );
}

export default PomodoroTimer;
