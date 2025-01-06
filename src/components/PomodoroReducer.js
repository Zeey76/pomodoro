const PomodoroReducer = (state, action) => {
  switch (action.type) {
    case "ChangeMode":
      return {
        ...state,
        mode: action.payload,
        secondsLeft: timerSettings[mode],
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
        secondsLeft: timerSettings[mode],
        isRunning: false,
      };
    default:
      return state;
  }
};

export default PomodoroReducer;
