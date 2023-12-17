function NewCategoryInput(props) {
    return (
        <div className="form-input">
            <div>
                <label>Or create new category</label>
                <label id="priority-label">Priority</label>
            </div>

            <div id="add-category">
                <input type="text" value={props.categoryName} placeholder={"Category"}
                       onChange={(e) => props.setCategoryName(e.target.value)}/>
                <input id="priority-input" type="number" value={props.priority} min="1" max="7"
                       onChange={(e) => props.setPriority(e.target.value)}/> <br/>

                <button className="button-lg" type="button" onClick={props.handleNewCategoryButton}> Add new category
                    to list
                </button>
            </div>
        </div>
    )
}

export default NewCategoryInput;