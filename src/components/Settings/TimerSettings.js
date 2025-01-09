function TimerSettings({
  handleSettingsChange,
  tempSettings,
  setTempSettings,
}) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];
  function handleInput(number, filter) {
    if (tempSettings[filter] <= 1 && number === -1) {
      return;
    } else {
      setTempSettings((prev) => ({
        ...prev,
        [filter]: prev[filter] + number,
      }));
    }
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
              onChange={(e) => handleSettingsChange(e.target.value, filter)}
              className="w-5 bg-neutral-200 h-3 focus:outline-none cursor-"
            />
            <div className="flex flex-col gap-[3px]">
              <img
                src="./icons/icon-arrow-up.svg"
                onClick={() => handleInput(+1, filter)}
              />
              <img
                src="./icons/icon-arrow-down.svg"
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
