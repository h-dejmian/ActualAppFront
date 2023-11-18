import {useEffect, useState} from "react";
import '../../css/content.css';
import {api} from "../../App.js";
import ContentHeader from "./ContentHeader";

function Statistics(props) {
    const [activitiesByTime, setActivitiesByTime] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentMonthCats, setCurrentMonthCats] = useState([]);


    async function fetchData() {
        const activities = await api.fetchActivitiesByTime(props.user.id);
        setActivitiesByTime(activities);
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories);
        const currentMonthCats = await api.fetchCategoriesWithTimeByMonth(props.user.id, new Date().getMonth()+1);
        setCurrentMonthCats(currentMonthCats);
    }

    useEffect(() => fetchData, []);

    return (
        <div id="statistics">
            <ContentHeader header="Statistics" />
            <div id="statistics-content">
                <div className="statistics-single">
                    <h4> Activities by time spent summary </h4>
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
                <div className="statistics-single">
                    <h4> Categories time summary </h4>
                    <table className="table-cst">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Number Of Activities</th>
                            <th>Time spent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories.map((category, index) =>
                            <tr key={index}>
                            <td>{category.name}</td>
                            <td>{category.activitiesNumber}</td>
                            <td>{category.timeSpentInMinutes}</td>
                           </tr>  )}

                        </tbody>
                    </table>
                </div>
                <div className="statistics-single">
                    <h4> Categories in current month </h4>
                    <table className="table-cst">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Time spent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentMonthCats.map((category, index) =>
                            <tr key={index}>
                                <td>{category.description}</td>
                                <td>{category.timeSpentInMinutes}</td>
                            </tr>  )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Statistics