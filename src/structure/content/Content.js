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

    componentDidMount() {
        this.fetchActivitiesByDate(moment(new Date).format("yyyy-MM-DD"))
    }

    render () {
        return (
            <div className="content">
                <Activities activities={this.state.activities} />
                <MyCalendar fetchActivitiesByDate={this.fetchActivitiesByDate.bind(this)}/>
            </div>
        )
    }

}

export default Content;