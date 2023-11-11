function ClearCompletedButton(props) {
    return (
        <button className="button-lg button-listed" onClick={props.removeCompletedActivities}> Clear completed </button>
    )
}

export default ClearCompletedButton;