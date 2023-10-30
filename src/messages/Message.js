const Message = (props) => <div style={{ display: props.message ? "block" : "none", color : "green" }}>{props.message}</div>

export default Message