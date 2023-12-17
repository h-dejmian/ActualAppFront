function CategoriesSelect(props) {
    return (
        <div className="form-input">
            <label htmlFor="categories">Choose category from the list : </label>
            <select className="select" onChange={e => props.handleSelect(e)} name="categories"
                    id="categories-dropdown">
                <option disabled selected value> -- select an option --</option>
                {props.categories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>))}
            </select>
        </div>
    )
}

export default CategoriesSelect;