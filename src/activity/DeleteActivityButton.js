import {useCallback, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";


function DeleteActivityButton(props) {
    const fetchDelete = useCallback( () => {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'DELETE'});
    }, [props])

    return (
        <button type="button" onClick={fetchDelete}> Delete </button>
    )
}

export default DeleteActivityButton;