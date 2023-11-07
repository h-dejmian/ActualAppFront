import {useState} from "react";
import DeleteActivityButton from "../../../activity/DeleteActivityButton";

function NotedActivity(props) {
    const[completed, setCompleted] = useState(props.activity.completed);
    async function handleCheckboxChange() {
        setCompleted(!completed)
        props.toggleCompleted(props.activity.id)

        await fetch(`http://localhost:8080/api/v1/activities/${props.activity.id}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    return (
        <div className="noted-activity">
            <p>{props.activity.description}</p>
            <p> <input type="checkbox" id="checkbox-noted" checked={props.activity.completed}
                        onChange={handleCheckboxChange} /></p>
            <DeleteActivityButton id={props.activity.id} removeActivity={props.removeActivity} />
        </div>

    )
}

export default NotedActivity;