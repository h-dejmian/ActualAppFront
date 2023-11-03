import {useState} from "react";

function NotedActivity(props) {
    const[completed, setCompleted] = useState(props.activity.completed);
    async function handleCheckboxChange() {
        setCompleted(!completed)

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
            <p> <input type="checkbox" id="is-completed-checkbox" checked={completed}
                        onChange={handleCheckboxChange} /></p>
        </div>

    )
}

export default NotedActivity;