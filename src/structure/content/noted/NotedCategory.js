import React, {useEffect, useState} from "react";
import {api} from "../../../App";
import NoActivityMsg from "../../../messages/NoActivityMsg";
import NotedActivity from "./NotedActivity";
import DeleteCategoryButton from "../../../category/DeleteCategoryButton";
import AddNotedActivityModal from "../../../modals/AddNotedActivityModal";

function NotedCategory(props) {
    const [activities, setActivities] = useState([]);

    async function getActivities() {
        const activities = await api.fetchActivitiesByCategory(props.category.id);
        setActivities(activities);
    }

    function addActivity(activity) {
        setActivities([...activities, activity])
    }

    function removeActivity(id) {
        const ac = activities.filter((activity) => activity.id !== id);
        setActivities(ac);
    }

    useEffect(() => getActivities, []);

    return (
        <div className="noted-category">
            <div className="noted-category-header">
                <div><h3 id="noted-category-name">{props.category.name}</h3></div>
                <div id="noted-category-utils">
                    <AddNotedActivityModal addActivity={addActivity} date={new Date()} appElement={'body'} user={props.user}
                                           type={"NOTED"} category={props.category} />
                    <DeleteCategoryButton id={props.category.id} removeCategory={props.removeCategory} />
                </div>
            </div>

            {activities.length === 0 ?
                <NoActivityMsg/> : activities.map((activity, index) => <NotedActivity key={index} activity={activity} removeActivity={removeActivity}/>)}

        </div>
    )
}

export default NotedCategory;