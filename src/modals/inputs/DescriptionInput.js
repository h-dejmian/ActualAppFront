function DescriptionInput(props) {
    return (
        <div className="form-input">
            <label>Description</label>
            <input type="text" value={props.description} placeholder={"Description"}
               onChange={(e) => props.setDescription(e.target.value)}/>
        </div>
    )
}

export default DescriptionInput;