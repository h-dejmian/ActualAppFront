import DeleteActivityButton from "../../../activity/DeleteActivityButton";
import UpdateActivityModal from "../../../modals/UpdateActivityModal";
import {useState} from "react";
import UpdatePlannedActivityModal from "../../../modals/UpdatePlannedActivityModal";

function PlannedActivity(props) {
    const [completed, setCompleted] = useState(props.completed);

    async function handleCheckboxChange() {
        setCompleted(!completed)

        await fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    return (
        <tr className="planned-activity">
            <td>{props.description}</td>
            <td>{props.startTime}</td>
            <td>{props.endTime}</td>
            <td>{props.categoryName}</td>
            <td> <input type="checkbox" id="is-completed-checkbox"  checked={completed}
                        onChange={handleCheckboxChange} /></td>

            <td><DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} /></td>
            <td><UpdatePlannedActivityModal id={props.id}
                                     description={props.description}
                                     date={props.date}
                                     time={props.time}
                                     categoryName={props.categoryName}
                                     updateActivity = {props.updateActivity}
                                     user = {props.user}
                                     startTime={props.startTime}
                                     endTime={props.endTime}/></td>
        </tr>
    )
}

export default PlannedActivity;