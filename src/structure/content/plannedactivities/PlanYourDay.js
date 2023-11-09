import MyCalendar from "../MyCalendar";
import {useState} from "react";
import PlannedActivities from "./PlannedActivities";

function PlanYourDay(props) {
    return (
        <div id="plan-your-day">
            <h3 id="planned-header"> Plan your day! </h3>
            <PlannedActivities user={props.user} />
        </div>
    )
}

export default PlanYourDay