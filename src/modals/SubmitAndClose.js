function SubmitAndClose(props) {
    return (
        <div className="submit-close">
            <button className="button-lg" onClick={props.handleSubmitForm} type="submit">Submit</button>
            <button className="button-lg" onClick={props.handleClose}>Close</button>
        </div>
    )
}

export default SubmitAndClose;