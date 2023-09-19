import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import ModalForm from "../../modalForm";

class Activities extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            // description: "",
            // timeSpentInMinutes: 0,
            // date: "",
            // completed: false,
            // categoryName: ""
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="activities">

                <h3>Activities</h3>
                <ModalForm handleSubmitForm={this.handleSubmitForm} />
                {this.state.data.map((activity, index) => <Activity key={index}
                                                                    name={activity.description}
                                                                    time={activity.timeSpentInMinutes}
                                                                    id={activity.id}
                                                                    removeActivity={this.removeActivity.bind(this)}/>
                )}
            </div>
        )
    }

    async fetchData() {
        const response = await fetch("http://localhost:8080/api/v1/activities");
        const data = await response.json();
        this.setState({data: data});
    }

    removeActivity(id) {
        const data = this.state.data.filter((activity) => activity.id !== id)
        this.setState({data: data});
    }

    addActivity(activity) {

    }


}

export default Activities;