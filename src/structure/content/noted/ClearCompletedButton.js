function ClearCompletedButton(props) {
    return (
        <button className="button-lg" onClick={props.removeCompletedActivities}> Clear completed </button>
    )
}

export default ClearCompletedButton;