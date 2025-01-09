let timerSettings = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 10 * 60,
};

export const initialState = {
  mode: "pomodoro",
  secondsLeft: timerSettings.pomodoro,
  isRunning: false,
  font: "kumbhSans",
  color: "primary-400",
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
      timerSettings = {
        pomodoro: action.payload.pomodoro * 60,
        shortBreak: action.payload.shortBreak * 60,
        longBreak: action.payload.longBreak * 60
      }
      return {
        ...state,
        secondsLeft: timerSettings[state.mode],
        isRunning: false
      };
    case "ChangeFont":
      return {
        ...state,
        font: action.payload
      };
    case "ChangeColor":
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};

export default PomodoroReducer;
