import { createContext, useContext, useReducer } from "react";
import PomodoroReducer from "./components/PomodoroReducer";
import { initialState } from "./components/PomodoroReducer";

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
