import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import AddActivityModal from "../../modals/AddActivityModal";
import moment from "moment/moment";

class Activities extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.fetchData()
    }

    render() {
        return (
            <div className="activities">

                <h3>Activities</h3>
                <AddActivityModal addActivity={this.props.addActivity} date={moment(new Date).format("yyyy-MM-DD")} />
                <table id="table-activities">
                    <th>Activity</th>
                    <th>Time spent</th>
                    <th>Category</th>
                    <th>Completed</th>
                    <th>Update</th>
                    <th>Delete</th>
                    {this.props.activities.map((activity, index) =>  <Activity key={index}
                                                                              description={activity.description}
                                                                              time={activity.timeSpentInMinutes}
                                                                               category = {activity.category}
                                                                               completed = {activity.completed}
                                                                              id={activity.id}
                                                                              removeActivity={this.props.removeActivity}
                                                                              updateActivity={this.props.updateActivity}/> )}
                </table>

                {/*{this.props.activities.map((activity, index) => <Activity key={index}*/}
                {/*                                                          description={activity.description}*/}
                {/*                                                          time={activity.timeSpentInMinutes}*/}
                {/*                                                        id={activity.id}*/}
                {/*                                                        removeActivity={this.props.removeActivity}*/}
                {/*                                                        updateActivity={this.props.updateActivity}/>*/}
                {/*)}*/}
            </div>
        )
    }
}

export default Activities;