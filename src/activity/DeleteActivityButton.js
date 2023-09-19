import {useCallback, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";


function DeleteActivityButton(props) {

    const fetchDelete = useCallback( () => {
        fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {method: 'DELETE'});
        props.removeActivity(props.id);
    }, [props])

    return (
        <a href="" onClick={fetchDelete}> X </a>
    )
}

export default DeleteActivityButton;