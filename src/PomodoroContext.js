import { createContext, useContext, useReducer } from "react";
import PomodoroReducer from "./components/PomodoroReducer";

const timerSettings = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 10 * 60,
};

const initialState = {
  mode: "pomodoro",
  secondsLeft: timerSettings.pomodoro,
  isRunning: false,
};

const PomodoroContext = createContext();

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PomodoroReducer, initialState);

  return (
    <PomodoroContext.Provider value={{ state, dispatch }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => useContext(PomodoroContext);
