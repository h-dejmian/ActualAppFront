import './css/activity.css';

function Activity(props) {
    return <div className="activity">
            <h3> {props.name + "  :  " + props.time + " minutes"}</h3>
        </div>
}

export default Activity;