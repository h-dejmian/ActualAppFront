import Activity from "../../activity/Activity";
import '../../css/content.css';
import React, {Component} from 'react'
import {useEffect, useState} from "react";

class Activities extends Component {
    // const [data, setData] = useState([])

    constructor() {
        super()

        this.state = {
            data : []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    // useEffect( () => {
    //
    //     async function fetchData() {
    //             const response = await fetch("http://localhost:8080/api/v1/activities");
    //             const data = await response.json();
    //             setData(data);
    //         }
    //     fetchData()
    //     }, []
    // )

    render() {
    // <div className="activities">
    //     <h3>Activities</h3>
    //     <Activity name="Activity1" time="300" />
    //     <Activity name="Activity2" time="20" />
    //     <Activity name="Activity3" time="100" />
    //     <Activity name="Activity4" time="80" />
    // </div>

        return (
            <div className="activities">
            <h3>Activities</h3>
            {this.state.data.map((activity, index) => <Activity key={index}
                                                                name={activity.description}
                                                                time={activity.timeSpentInMinutes}
                                                                id={activity.id}
                                                                removeActivity = {this.removeActivity.bind(this)} />
                                 )}
        </div>
        )
    }

    async fetchData() {
        const response = await fetch("http://localhost:8080/api/v1/activities");
        const data = await response.json();
        this.setState({data : data});
    }

    removeActivity(id) {
        const data = this.state.data.filter((activity) => activity.id !== id)
        this.setState({data : data});
    }
}

export default Activities;