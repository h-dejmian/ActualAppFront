import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import ModalForm from "../../modalForm";
import moment from "moment/moment";

class Activities extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     data: []
        // }
    }

    componentDidMount() {
        // this.fetchData()
    }

    render() {
        return (
            <div className="activities">

                <h3>Activities</h3>
                <ModalForm handleSubmitForm={this.handleSubmitForm} addActivity={this.props.addActivity} date={moment(new Date).format("yyyy-MM-DD")} />
                {this.props.activities.map((activity, index) => <Activity key={index}
                                                                    name={activity.description}
                                                                    time={activity.timeSpentInMinutes}
                                                                    id={activity.id}
                                                                    removeActivity={this.props.removeActivity}
                                                                    updateActivity={this.props.updateActivity}/>
                )}
            </div>
        )
    }
}

export default Activities;