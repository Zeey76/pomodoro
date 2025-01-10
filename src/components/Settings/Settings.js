import { useState } from "react";
import TimerSettings from "./TimerSettings";
import ColorSettings from "./ColorSettings";
import FontSettings from "./FontSettings";
import ApplyButton from "./ApplyButton";

function Settings({ handleSettings, settings, setSettings, dispatch }) {
  const [tempSettings, setTempSettings] = useState(settings);

  const handleSettingsChange = (newValue, settings) => {
    if (!isNaN(newValue) && newValue > 60) {
      return;
    }
    setTempSettings((prev) => ({
      ...prev,
      [settings]: newValue,
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-900 flex justify-center items-center wrapper ${tempSettings.font}`}
    >
      <div className=" bg-neutral-100 p-1.5 w-[22rem] rounded-md flex flex-col gap-1 z-1000 absolute sm:w-[35rem]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Settings</h2>
          <button>
            <img src="./icons/icon-close.svg" onClick={handleSettings} />
          </button>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col gap-0.5">
          <p className="self-center uppercase font-semibold sm:self-start">
            Time (Minutes)
          </p>
          <div className="flex flex-col gap-0.5 sm:flex-row">
            <TimerSettings
              handleSettingsChange={handleSettingsChange}
              tempSettings={tempSettings}
              setTempSettings={setTempSettings}
            />
          </div>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:justify-between">
          <p>Font</p>
          <div className="flex gap-1">
            <FontSettings
              handleSettingsChange={handleSettingsChange}
              tempSettings={tempSettings}
            />
          </div>
        </div>
        <hr className="bg-black h-[0.5px]" />
        <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:justify-between">
          <p>Color</p>
          <div className="flex gap-1">
            <ColorSettings
              handleSettingsChange={handleSettingsChange}
              tempSettings={tempSettings}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ApplyButton
            tempSettings={tempSettings}
            handleSettings={handleSettings}
            setSettings={setSettings}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
