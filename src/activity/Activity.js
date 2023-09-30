import '../css/activity.css';
import ActivityDescription from "./activitydescription/ActivityDescription";
import DeleteActivityButton from "./activitydescription/DeleteActivityButton";
import UpdateActivityModal from "../modals/UpdateActivityModal";

function Activity(props) {
    // return <div className="activity">
    //             <ActivityDescription description={props.description}
    //                                  time={props.time}
    //                                  id={props.id}
    //                                  removeActivity = {props.removeActivity}
    //                                  updateActivity={props.updateActivity} />
    //     </div>
    return (
        <tr className="activity">
            <td>{props.description}</td>
            <td>{props.time}</td>
            <td>{props.category}</td>
            <td>{props.completed}</td>
            <td><DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} /></td>
            <td><UpdateActivityModal id={props.id} description={props.description} time={props.time} updateActivity = {props.updateActivity} /></td>
        </tr>
    )
}

export default Activity;