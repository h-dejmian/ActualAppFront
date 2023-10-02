import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import AddActivityModal from "../../modals/AddActivityModal";
import moment from "moment/moment";

class Activities extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="activities">

                <h3>Activities</h3>
                <AddActivityModal addActivity={this.props.addActivity} date={moment(new Date).format("yyyy-MM-DD")} appElement={'body'} />
                <table id="table-activities">
                    <thead>
                         <tr>
                            <th>Activity</th>
                            <th>Time spent</th>
                            <th>Category</th>
                            <th>Completed</th>
                            <th>Delete</th>
                            <th>Update</th>
                         </tr>
                    </thead>

                    <tbody>
                            {this.props.activities.map((activity, index) =>  <Activity key={index}
                                                                                       id={activity.id}
                                                                                       description={activity.description}
                                                                                       time={activity.timeSpentInMinutes}
                                                                                       completed = {activity.completed}
                                                                                       category = {activity.category}
                                                                                       removeActivity={this.props.removeActivity}
                                                                                       updateActivity={this.props.updateActivity}/> )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Activities;