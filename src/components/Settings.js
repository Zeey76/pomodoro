import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

function Settings({ handleSettings, dispatch, settings, setSettings }) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];
  const colors = [
    "hsl(0, 91%, 71%)",
    "hsl(182, 91%, 71%)",
    "hsl(284, 89%, 74%)",
  ];
  const fonts = [
    "font-kumbhSans", 
    "font-robotoSlab", 
    "font-spaceMono"
  ];
  const [tempSettings, setTempSettings] = useState(settings);

  const handleSettingsChange = (newValue, settings) => {
    setTempSettings((prev) => ({
      ...prev,
      [settings]: newValue,
    }));
  };

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
    <div
      className={`fixed top-0 left-0 w-full h-full z-900 flex justify-center items-center wrapper ${tempSettings.font}`}
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
                      onClick={() => handleInput(+1, filter)}
                    />
                    <img
                      src="./icons/icon-arrow-down.svg"
                      onClick={() => handleInput(-1, filter)}
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
            {fonts.map((font) => (
              <FontSelector
                handleSettingsChange={handleSettingsChange}
                fontChoice={font}
              />
            ))}
          </div>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col items-center justify-center gap-0.5">
          <p>Color</p>
          <div className="flex gap-1">
            {colors.map((color) => (
              <ColorSelector
                handleSettingsChange={handleSettingsChange}
                colorChoice={color}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="apply-button w-9 p-0.5 rounded-full text-neutral-200 font-semibold"
            style={{ backgroundColor: tempSettings.color }}
            onClick={onApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function ColorSelector({ handleSettingsChange, colorChoice }) {
  return (
    <div
      className={`h-2.5 w-2.5 rounded-full flex items-center justify-center cursor-pointer`}
      style={{ backgroundColor: colorChoice }}
      onClick={() => handleSettingsChange(colorChoice, "color")}
    ></div>
  );
}

function FontSelector({ fontChoice, handleSettingsChange }) {
  return (
    <button>
      <div
        className={`h-2.5 w-2.5 bg-neutral-200 rounded-full flex items-center justify-center`}
        style={{ fontFamily: fontChoice }}
        onClick={() => handleSettingsChange(fontChoice, "font")}
      >
        Aa
      </div>
    </button>
  );
}

export default Settings;
