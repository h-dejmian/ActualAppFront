import '../css/activity.css';
import ActivityDescription from "./activitydescription/ActivityDescription";
import DeleteActivityButton from "./activitydescription/DeleteActivityButton";
import UpdateActivityModal from "../modals/UpdateActivityModal";

function Activity(props) {
    return (
        <tr className="activity">
            <td>{props.description}</td>
            <td>{props.time}</td>
            <td>{props.category}</td>
            <td>{props.completed.toString()}</td>
            <td><DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} /></td>
            <td><UpdateActivityModal id={props.id} description={props.description} time={props.time} updateActivity = {props.updateActivity} /></td>
        </tr>
    )
}

export default Activity;