import React, { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import Timer from "./components/Timer";
import { usePomodoro } from "./PomodoroContext";
import Settings from "./components/Settings";

function PomodoroTimer() {
  const { state, dispatch } = usePomodoro();
  const { mode, secondsLeft, isRunning, color, font } = state;
  const [isSettingOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
    font: "kumbhSans",
    color: "primary-400"
  })

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
    setIsSettingsOpen(!isSettingOpen);
  }

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen gap-3 font-${font}`}>
      <img src="./icons/logo.svg" />
      <FilterButtons dispatch={dispatch} mode={mode} color={color}/>
      <Timer
        isRunning={isRunning}
        secondsLeft={secondsLeft}
        dispatch={dispatch}
        color={color}
      />
      <img src="./icons/icon-settings.svg" onClick={handleSettings} />
      {isSettingOpen && (
        <Settings
          handleSettings={handleSettings} dispatch={dispatch} settings={settings} setSettings={setSettings}
        />
      )}
    </div>
  );
}

export default PomodoroTimer;
