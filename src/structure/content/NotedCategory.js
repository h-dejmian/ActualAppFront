import React, {useEffect, useState} from "react";
import {api} from "../../App";
import activity from "../../activity/Activity";
import NoActivityMsg from "../../messages/NoActivityMsg";
import Activity from "../../activity/Activity";
import NotedActivity from "../../activity/NotedActivity";

function NotedCategory(props) {
    const [activities, setActivities] = useState([]);

    async function getActivities() {
        const activities = await api.fetchActivitiesByCategory(props.category.id);
        setActivities(activities);
    }

    useEffect(() => getActivities, []);

    return (
        <div className="noted-category">
            <h3>{props.category.name}</h3>
            <table className="table-cst">

                <tbody>
                {activities.length === 0 ?
                    <NoActivityMsg/> : activities.map((activity, index) => <NotedActivity key={index} activity={activity}
                                                                                                />)}
                </tbody>
            </table>
            {/*{activities.length === 0 ? <NoActivityMsg /> : activities.map(activity => activity.description)}*/}
        </div>
    )
}

export default NotedCategory;