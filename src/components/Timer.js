function Timer({ isRunning, secondsLeft, dispatch, color }) {
  function formatTime(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="relative flex h-[18rem] w-[18rem] cursor-pointer items-center justify-center rounded-full bg-neutral-900">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
        <div className="px-2 text-[5.2rem] font-bold tracking-[-0.3625rem] text-neutral-300">
          {formatTime(secondsLeft)}
        </div>
        <div className=" ml-2 flex items-center justify-center text-center">
          <button
            className="text-center font-bold uppercase tracking-[0.9375rem]"
            style={{ color: color }}
            onClick={() => dispatch({ type: "ToggleTimer" })}
          >
            {isRunning ? "Pause" : secondsLeft === 0 ? "Restart" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
