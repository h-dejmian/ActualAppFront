function FormInput(props) {
    return (
        <div>
        {
            !props.min && !props.max &&
            <div>
                <label>{props.label}</label>
                <input type={props.type} value={props.value} placeholder={props.label}
                       onChange={(e) => props.inputSetter(e.target.value)}/><br/>
            </div>
        }

         {
             props.min && props.max &&
            <div>
                <label>{props.label}</label>
                <input type={props.type} value={props.value} min={props.min} max={props.max} placeholder={props.label}
                       onChange={(e) => props.inputSetter(e.target.value)}/><br/>
            </div>
        }
        </div>
    )
}

export default FormInput;