import {useCallback} from "react";
import '../css/activity.css'


function DeleteCategoryButton(props) {

    const fetchDelete = useCallback(() => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            fetch(`http://localhost:8080/api/v1/categories/${props.id}`, {method: 'DELETE', credentials: "include"});
            props.removeCategory(props.id);
        }
    }, [props])

    return (
        <a id="removeActivity" onClick={fetchDelete}> X </a>
    )
}

export default DeleteCategoryButton;