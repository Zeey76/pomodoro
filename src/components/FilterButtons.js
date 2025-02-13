function FilterButtons({ dispatch, mode, color }) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];

  return (
    <div className="filter-buttons bg-neutral-900 grid grid-cols-3 rounded-full p-[5px]">
      {filters.map((filter) => {
        return (
          <button
            key={filter}
            className={`${
              mode === filter
                ? `p-[5px] rounded-full text-neutral-900`
                : ""
            } text-neutral-400 font-semibold text-sm shadow-inner`}
            onClick={() => dispatch({ type: "ChangeMode", payload: filter })}
            style={mode === filter ? {backgroundColor : color} : undefined}
          >
            {filter.replace(/([A-Z])/g, " $1").toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
