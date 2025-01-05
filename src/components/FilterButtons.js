function MyButton({handleChange, activeFilter}) {
    const filters = ["pomodoro", "shortBreak", "longBreak"];

    return(
    <div className="filter-buttons bg-neutral-900 grid grid-cols-3 rounded-full p-[5px]">
        {filters.map(filter => {
            return <button className={`${activeFilter === filter ? "bg-primary-400 p-[5px] rounded-full text-neutral-900": ""} text-neutral-400 font-semibold text-sm shadow-inner`} onClick={() => handleChange(filter)}>
                {filter.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </button>
        })}
        
      </div>
    )
}

export default MyButton
