import {useEffect, useState} from "react";
import '../../css/content.css';
import Activity from "../../activity/Activity";

function Statistics(props) {
    const [activitiesByTime, setActivitiesByTime] = useState([]);

    async function fetchActivitiesByTime() {
        const response = await fetch(`http://localhost:8080/api/v1/activities?groupByTime`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        const activities = await response.json();
        setActivitiesByTime(activities)
    }

    useEffect(() => fetchActivitiesByTime, []);

    return (
        <div>
             {props.user.login} you're doing great!
            <h4> Activities by time spent</h4>
            <table className="table-cst">
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Time spent</th>
                    </tr>
                </thead>
                <tbody>
                {activitiesByTime.map((activity, index) =>  <tr key={index}><td>{activity.description}</td>
                    <td>{activity.timeSpentInMinutes}</td></tr>  )}

                </tbody>

            </table>
        </div>
    )
}

export default Statistics