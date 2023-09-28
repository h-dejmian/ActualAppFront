import Activities from "./Activities";
import MyCalendar from "./MyCalendar";
import '../../css/content.css';
import {Component} from "react";
import moment from "moment";


class Content extends Component {

    constructor() {
        super()

        this.state = {
            activities: []
        }
    }

    async fetchActivitiesByDate(date) {
        const response = await fetch(`http://localhost:8080/api/v1/activities?date=${date}`);
        const activities = await response.json();
        this.setState({activities: activities});
    }

    removeActivity(id) {
        let activities = this.state.activities.filter((activity) => activity.id !== id);
        this.setState({activities: activities});
    }

    addActivity(activity) {
        this.setState(current => ({
            activities : [...current.activities, activity ]
        }))
    }

    updateActivity(id, activity) {
        let activityToUpdate = this.state.activities.filter((a) => a.id !== id);
    }

    componentDidMount() {
        this.fetchActivitiesByDate(moment(new Date).format("yyyy-MM-DD"))
    }

    render () {
        return (
            <div className="content">
                <Activities activities={this.state.activities}
                            addActivity={this.addActivity.bind(this)}
                            removeActivity={this.removeActivity.bind(this)}
                            updateActivity={this.updateActivity.bind(this)}/>
                <MyCalendar fetchActivitiesByDate={this.fetchActivitiesByDate.bind(this)}/>
            </div>
        )
    }

}

export default Content;