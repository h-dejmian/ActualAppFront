import {useEffect, useState} from "react";
import '../../css/content.css';
import Activity from "../../activity/Activity";
import Categories from "./Categories";
import {api} from "../../App.js";

function Statistics(props) {
    const [activitiesByTime, setActivitiesByTime] = useState([]);
    const [categories, setCategories] = useState([]);

    async function fetchData() {
        // const response = await fetch(`http://localhost:8080/api/v1/activities?groupByTime`, {
        //     method: "GET",
        //     credentials: "include",
        //     headers: {
        //         'Content-Type': "application/json",
        //     },
        // })
        const activities = await api.fetchActivitiesByTime();
        setActivitiesByTime(activities);
        const categories = await api.fetchCategories();
        setCategories(categories);
    }

    useEffect(() => fetchData, []);

    return (
        <div id="statistics">
            <div>
                 <h2>{props.user.login} you're doing great!</h2>
                <h4> Activities by time spent</h4>
                <table className="table-cst">
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Time spent</th>
                        </tr>
                    </thead>
                    <tbody>
                    {activitiesByTime.map((activity, index) =>  <tr key={index}><td>{activity.description}</td>
                        <td>{activity.timeSpentInMinutes}</td></tr>  )}

                    </tbody>
                </table>
            </div>
            <div>
                <h4> Categories</h4>
                <table className="table-cst">
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Number Of Activities</th>
                        <th>Time spent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category, index) =>  <tr key={index}><td>{category.name}</td>
                        <td>{category.activitiesNumber}</td>
                        <td>{category.timeSpentInMinutes}</td>
                    </tr>  )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statistics