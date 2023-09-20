import DeleteActivityButton from "./DeleteActivityButton";
import ActivityName from "./ActivityName";
import ActivityTime from "./ActivityTime";
import '../../css/activity.css'


const ActivityDescription = (props) => <h3 className="activity-desc">
    <ActivityName name={props.name} /> : <ActivityTime time={props.time}/>

    <DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} />
</h3>;

export default ActivityDescription;