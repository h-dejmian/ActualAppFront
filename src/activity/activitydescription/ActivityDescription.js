import DeleteActivityButton from "./DeleteActivityButton";
import ActivityName from "./ActivityName";
import ActivityTime from "./ActivityTime";
import '../../css/activity.css'
import UpdateActivityModal from "../../modals/UpdateActivityModal";


const ActivityDescription = (props) => <h3 className="activity-desc">
    <ActivityName description={props.description} /> : <ActivityTime time={props.time}/>

    <DeleteActivityButton id={props.id} removeActivity = {props.removeActivity} />
    <UpdateActivityModal id={props.id} description={props.description} time={props.time} updateActivity = {props.updateActivity} />
</h3>;

export default ActivityDescription;