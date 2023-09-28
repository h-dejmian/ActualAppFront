import DeleteActivityButton from "./DeleteActivityButton";
import ActivityName from "./ActivityName";
import ActivityTime from "./ActivityTime";
import '../../css/activity.css'
import UpdateActivityButton from "./UpdateActivityButton";


const ActivityDescription = (props) => <h3 className="activity-desc">
    <ActivityName name={props.name} /> : <ActivityTime time={props.time}/>

    <DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} />
    <UpdateActivityButton id={props.id} updateActivity = {props.updateActivity} />
</h3>;

export default ActivityDescription;