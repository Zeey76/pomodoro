import React from "react";
import PomodoroTimer from "./PomodoroTimer";
import { PomodoroProvider } from "./PomodoroContext";

function App() {
  return (
    <PomodoroProvider>
      <PomodoroTimer />
    </PomodoroProvider>
  );
}

export default App;
