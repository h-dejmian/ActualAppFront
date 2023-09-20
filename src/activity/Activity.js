import '../css/activity.css';
import ActivityDescription from "./activitydescription/ActivityDescription";

function Activity(props) {
    return <div className="activity">
                <ActivityDescription name={props.name} time={props.time} id={props.id} removeActivity = {props.removeActivity} />
        </div>
}

export default Activity;