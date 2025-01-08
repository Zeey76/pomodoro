let timerSettings = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 10 * 60,
};

export const initialState = {
  mode: "pomodoro",
  secondsLeft: timerSettings.pomodoro,
  isRunning: false,
};

const PomodoroReducer = (state, action) => {
  switch (action.type) {
    case "ChangeMode":
      return {
        ...state,
        mode: action.payload,
        secondsLeft: timerSettings[action.payload],
        isRunning: false,
      };
    case "Decrement":
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1,
      };
    case "ToggleTimer":
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case "RestartTimer":
      return {
        ...state,
        secondsLeft: timerSettings[state.mode],
        isRunning: false,
      };
    case "ChangeTimer":
      timerSettings = action.payload
      return {
        ...state,
        isRunning: false,
        secondsLeft: timerSettings[state.mode]
      };
    default:
      return state;
  }
};

export default PomodoroReducer;
