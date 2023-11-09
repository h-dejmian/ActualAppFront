import MyCalendar from "../MyCalendar";
import {useState} from "react";
import PlannedActivities from "./PlannedActivities";
import ContentHeader from "../ContentHeader";

function PlanYourDay(props) {
    return (
        <div id="plan-your-day">
            <ContentHeader header="Plan your day!" />
            <PlannedActivities user={props.user} />
        </div>
    )
}

export default PlanYourDay