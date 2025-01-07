function Settings({handleSettings}) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];
  return (
    <div className="fixed top-0 left-0 w-full h-full z-900 flex justify-center items-center wrapper">
      <div className=" bg-neutral-100 p-1.5 w-[23rem] rounded-md flex flex-col gap-1 z-1000">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Settings</h3>
          <button>
            <img src="./icons/icon-close.svg" onClick={handleSettings}/>
          </button>
        </div>
        <hr className="bg-black h-[1px]" />
        <div className="flex flex-col gap-0.5">
          <p className="self-center uppercase">Time (Minutes)</p>
          {filters.map((filter) => {
            return (
              <div className="flex justify-between items-center">
                <p>{filter.replace(/([A-Z])/g, " $1").toLowerCase()}</p>
                <div className="flex justify-between items-center p-1 w-10 bg-neutral-200 h-3 rounded-md">
                  <input
                    type="number"
                    value={25}
                    className="w-5 bg-neutral-200 h-3"
                  />
                  <div className="flex flex-col gap-[3px]">
                    <img src="./icons/icon-arrow-up.svg" />
                    <img src="./icons/icon-arrow-down.svg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="bg-black h-[1px]" />
        <div className="flex flex-col items-center justify-center gap-0.5">
            <p>Font</p>
            <div className="flex gap-1">
                <div className="h-2.5 w-2.5 bg-neutral-200 rounded-full flex items-center justify-center">Aa</div>
                <div className="h-2.5 w-2.5 bg-neutral-200 rounded-full flex items-center justify-center">Aa</div>
                <div className="h-2.5 w-2.5 bg-neutral-200 rounded-full flex items-center justify-center">Aa</div>
            </div>
        </div>
        <hr className="bg-black h-[1px]" />
        <div className="flex flex-col items-center justify-center gap-0.5">
            <p>Color</p>
            <div className="flex gap-1">
                <div className="h-2.5 w-2.5 bg-primary-400 rounded-full flex items-center justify-center"></div>
                <div className="h-2.5 w-2.5 bg-primary-500 rounded-full flex items-center justify-center"></div>
                <div className="h-2.5 w-2.5 bg-primary-600 rounded-full flex items-center justify-center"></div>
            </div>
        </div>
        <div className="flex justify-center items-center">
        <button className="apply-button bg-primary-400 w-9 p-0.5 rounded-full text-neutral-200 font-semibold">Apply</button>
        </div>
      </div>
    </div>
  );
}
export default Settings;
