const ErrorMsg = (props) => <div style={{ display: props.errorMsg ? "block" : "none", color : "red" }}>{props.errorMsg}</div>

export default ErrorMsg