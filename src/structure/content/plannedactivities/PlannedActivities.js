import '../../../css/content.css';
import React, {Component} from 'react'

import moment from "moment/moment";
import {api} from "../../../App";
import NoActivityMsg from "../../../messages/NoActivityMsg";
import MyCalendar from "../MyCalendar";
import PlannedActivity from "./PlannedActivity";
import AddPlannedActivityModal from "../../../modals/AddPlannedActivityModal";
import TimeComparator from "./TimeComparator";


const timeComparatator = new TimeComparator();

class PlannedActivities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activities: [],
            selectedDate: moment(new Date).format("yyyy-MM-DD")
        }
    }

    setSelectedDate(date) {
        this.setState({selectedDate: date})
    }

    async getActivitiesByDate(date) {
        const activities = await api.fetchActivitiesWithTimeRangeByDate(this.props.user.id, date);
        if (activities !== null) {
            this.setState({activities: activities});
        }
    }

    componentDidMount() {
        this.getActivitiesByDate(moment(new Date).format("yyyy-MM-DD"))
    }

    removeActivity(id) {
        let activities = this.state.activities.filter((activity) => activity.id !== id);
        this.setState({activities: activities});
    }

    addActivity(activity) {
        const updated = [...this.state.activities, activity]
        updated.sort((a, b) => timeComparatator.compareTime(a.startTime, b.startTime))
        this.setState({
            activities: updated
        })
    }

    updateActivity(id, activity) {
        const activities = this.state.activities.map(a => a.id !== id  ? a : activity );

        this.setState(current => ({
            activities:  activities
        }))
    }


    render() {
        return (
            <div id="planned-activities">
                <div>
                    <h3>Planned Activities in {this.state.selectedDate} </h3>

                    <AddPlannedActivityModal addActivity={this.addActivity.bind(this)} date={this.state.selectedDate}
                                      appElement={'body'} user={this.props.user}
                                      type={"REGULAR"}  />

                    <table className="table-cstPlanned">
                        <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Category</th>
                            <th>Completed</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.state.activities.length === 0 ?
                            <NoActivityMsg/> : this.state.activities.map((activity, index) => <PlannedActivity key={index}
                                                                                                                            id={activity.id}
                                                                                                                            description={activity.description}
                                                                                                                            startTime={activity.startTime}
                                                                                                                            endTime={activity.endTime}
                                                                                                                            date={activity.date}
                                                                                                                            completed={activity.completed}
                                                                                                                            categoryName={activity.categoryName}
                                                                                                                            removeActivity={this.removeActivity.bind(this)}
                                                                                                                            updateActivity={this.updateActivity.bind(this)}
                                                                                                                            user={this.props.user}/>)}
                        </tbody>
                    </table>
                </div>
                <MyCalendar selectedDate={this.state.selectedDate}
                            setSelectedDate={this.setSelectedDate.bind(this)}
                            fetchActivitiesByDate={this.getActivitiesByDate.bind(this)}/>
            </div>
        )
    }
}

export default PlannedActivities;