function FormInput(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} value={props.value} placeholder={props.label}
                   onChange={(e) => props.inputSetter(e.target.value)}/><br/>
        </div>
    )
}

export default FormInput;