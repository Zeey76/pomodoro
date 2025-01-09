const ApplyButton = ({
  tempSettings,
  setSettings,
  handleSettings,
  dispatch,
}) => {
  const onApply = () => {
    if (
      tempSettings.pomodoro <= 0 ||
      tempSettings.shortBreak <= 0 ||
      tempSettings.longBreak <= 0
    ) {
      alert("Provide valid time inputs");
      return;
    }
    setSettings(tempSettings);
    dispatch({ type: "ChangeTimer", payload: tempSettings });
    dispatch({ type: "ChangeFont", payload: tempSettings.font });
    dispatch({ type: "ChangeColor", payload: tempSettings.color });
    handleSettings();
  };
  return (
    <button
      className="apply-button w-9 p-0.5 rounded-full text-neutral-200 font-semibold"
      style={{ backgroundColor: tempSettings.color }}
      onClick={onApply}
    >
      Apply
    </button>
  );
};

export default ApplyButton;
