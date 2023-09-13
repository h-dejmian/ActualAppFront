import '../css/activity.css';
import ActivityDescription from "./ActivityDescription";

function Activity(props) {
    return <div className="activity">
                <ActivityDescription name={props.name} time={props.time} />
        </div>
}

export default Activity;