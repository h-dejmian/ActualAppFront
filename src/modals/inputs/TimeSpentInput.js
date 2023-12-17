function TimeSpentInput(props) {
    return (
        <div className="form-input">
            <label>Time spent in minutes</label>
            <input type="text" min="1" max="1440" value={props.timeSpentInMinutes}
                   onChange={(e) => props.setTimeSpentInMinutes(e.target.value)}/>
        </div>
    )
}

export default TimeSpentInput;