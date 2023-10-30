import {useCallback} from "react"

function UpdateActivityButton(props) {

    const fetchUpdate = useCallback( () => {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'PUT'});
        props.updateActivity(props.id);

    }, [props])

    return (
        <a className="button-sm" onClick={fetchUpdate}> Update </a>
    )
}

export default UpdateActivityButton;