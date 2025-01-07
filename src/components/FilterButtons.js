function FilterButtons({ dispatch, mode }) {
  const filters = ["pomodoro", "shortBreak", "longBreak"];

  return (
    <div className="filter-buttons bg-neutral-900 grid grid-cols-3 rounded-full p-[5px]">
      {filters.map((filter) => {
        return (
          <button
            key={filter}
            className={`${
              mode === filter
                ? "bg-primary-400 p-[5px] rounded-full text-neutral-900"
                : ""
            } text-neutral-400 font-semibold text-sm shadow-inner`}
            onClick={() => dispatch({ type: "ChangeMode", payload: filter })}
          >
            {filter.replace(/([A-Z])/g, " $1").toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
