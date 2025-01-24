function TimerSettings({
  handleSettingsChange,
  tempSettings,
  setTempSettings,
}) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];
  function handleInput(number, filter) {
    const newValue = tempSettings[filter] + number;
    if (newValue < 1) {
      alert("Time cannot be less than 1 minute");
      return;
    }
    if (newValue > 60) {
      alert("Time cannot exceed 60 minutes");
      return;
    }

    setTempSettings((prev) => ({
      ...prev,
      [filter]: newValue,
    }));
  }
  return (
    <>
      {filters.map((filter) => (
        <div
          className="flex justify-between items-center sm:flex-col gap-0.5 sm:items-start"
          key={filter}
        >
          <p>{filter.replace(/([A-Z])/g, " $1").toLowerCase()}</p>
          <div className="flex justify-between items-center p-1 w-10 bg-neutral-200 h-3 rounded-md">
            <input
              type="number"
              value={tempSettings[filter]}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                handleSettingsChange(value, filter);
              }}
              className="w-5 bg-neutral-200 h-3 focus:outline-none"
            />
            <div className="flex flex-col gap-[3px]">
              <img
                src="./icons/icon-arrow-up.svg"
                alt=""
                onClick={() => handleInput(+1, filter)}
              />
              <img
                src="./icons/icon-arrow-down.svg"
                alt=""
                onClick={() => handleInput(-1, filter)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TimerSettings;
