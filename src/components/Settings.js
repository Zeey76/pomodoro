import { useState } from "react";

function Settings({ handleSettings, dispatch, settings, setSettings }) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];

  const [tempSettings, setTempSettings] = useState(settings);

  const handleSettingsChange = (newValue, settings) => {
    setTempSettings((prev) => ({
      ...prev,
      [settings]: newValue,
    }));
  };

  const handleInputValue = (number, input) => {
    if (tempSettings[input] <= 1 && number === -1) {
      setTempSettings((prev) => ({
        ...prev,
        [input]: 1,
      }));
    } else {
      setTempSettings((prev) => ({
        ...prev,
        [input]: tempSettings[input] + number,
      }));
    }
  };

  const onApply = () => {
    if (
      tempSettings.pomodoro ||
      tempSettings.shortBreak ||
      tempSettings.longBreak < 1
    ) {
      alert("Reset timer Values to a valid number");
      return;
    }
    setSettings(tempSettings);
    dispatch({ type: "ChangeTimer", payload: tempSettings });
    dispatch({ type: "ChangeFont", payload: tempSettings.font });
    dispatch({ type: "ChangeColor", payload: tempSettings.color });
    handleSettings();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-900 flex justify-center items-center wrapper font-${tempSettings.font}`}
    >
      <div className=" bg-neutral-100 p-1.5 w-[23rem] rounded-md flex flex-col gap-1 z-1000">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Settings</h3>
          <button>
            <img src="./icons/icon-close.svg" onClick={handleSettings} />
          </button>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col gap-0.5">
          <p className="self-center uppercase">Time (Minutes)</p>
          {filters.map((filter) => {
            return (
              <div className="flex justify-between items-center" key={filter}>
                <p>{filter.replace(/([A-Z])/g, " $1").toLowerCase()}</p>
                <div className="flex justify-between items-center p-1 w-10 bg-neutral-200 h-3 rounded-md">
                  <input
                    type="number"
                    value={tempSettings[filter]}
                    onChange={(e) =>
                      handleSettingsChange(e.target.value, filter)
                    }
                    className="w-5 bg-neutral-200 h-3 focus:outline-none cursor-"
                  />
                  <div className="flex flex-col gap-[3px]">
                    <img
                      src="./icons/icon-arrow-up.svg"
                      onClick={() => handleInputValue(+1, filter)}
                    />
                    <img
                      src="./icons/icon-arrow-down.svg"
                      onClick={() => handleInputValue(-1, filter)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col items-center justify-center gap-0.5">
          <p>Font</p>
          <div className="flex gap-1">
            <FontSelector
              fontChoice={"kumbhSans"}
              handleSettingsChange={handleSettingsChange}
            />
            <FontSelector
              fontChoice={"robotoSlab"}
              handleSettingsChange={handleSettingsChange}
            />
            <FontSelector
              fontChoice={"spaceMono"}
              handleSettingsChange={handleSettingsChange}
            />
          </div>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col items-center justify-center gap-0.5">
          <p>Color</p>
          <div className="flex gap-1">
            <ColorSelector
              colorChoice={"primary-400"}
              handleSettingsChange={handleSettingsChange}
            />
            <ColorSelector
              colorChoice={"primary-500"}
              handleSettingsChange={handleSettingsChange}
            />
            <ColorSelector
              colorChoice={"primary-600"}
              handleSettingsChange={handleSettingsChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`apply-button bg-${tempSettings.color} w-9 p-0.5 rounded-full text-neutral-200 font-semibold`}
            onClick={onApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function ColorSelector({ colorChoice, handleSettingsChange }) {
  return (
    <div
      className={`h-2.5 w-2.5 bg-${colorChoice} rounded-full flex items-center justify-center cursor-pointer`}
      onClick={() => handleSettingsChange(colorChoice, "color")}
    ></div>
  );
}

function FontSelector({ fontChoice, handleSettingsChange }) {
  return (
    <button>
      <div
        className={`h-2.5 w-2.5 bg-neutral-200 rounded-full flex items-center justify-center font-${fontChoice}`}
        onClick={() => handleSettingsChange(fontChoice, "font")}
      >
        Aa
      </div>
    </button>
  );
}

export default Settings;
