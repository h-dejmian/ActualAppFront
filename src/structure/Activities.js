import Activity from "../activity/Activity";
import '../css/content.css';

function Activities() {
    return (
        <div className="activities">
            <h3>Activities</h3>
            <Activity name="Activity1" time="300" />
            <Activity name="Activity2" time="20" />
            <Activity name="Activity3" time="100" />
            <Activity name="Activity4" time="80" />
        </div>
    )
}

export default Activities;