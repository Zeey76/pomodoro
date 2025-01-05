function MyButton() {
    const filters = ["pomodoro", "shortBreak", "longBreak"];

    return(
    <div className="filter-buttons bg-neutral-900 grid grid-cols-3 rounded-full">
        {filters.map(filter => {
            return <button className="text-neutral-400 font-light text-sm shadow-inner">
                {filter.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </button>
        })}
        
      </div>
    )
}

export default MyButton
