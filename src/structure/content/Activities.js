import Activity from "../../activity/Activity";
import '../../css/content.css';
import {useEffect, useState} from "react";

function Activities() {
    const [data, setData] = useState([])

    useEffect( () => {

        async function fetchData() {
                const response = await fetch("http://localhost:8080/api/v1/activities");
                const data = await response.json();
                setData(data);
            }
        fetchData()
        }, []
    )

    return (
        // <div className="activities">
        //     <h3>Activities</h3>
        //     <Activity name="Activity1" time="300" />
        //     <Activity name="Activity2" time="20" />
        //     <Activity name="Activity3" time="100" />
        //     <Activity name="Activity4" time="80" />
        // </div>

        <div className="activities">
            <h3>Activities</h3>
            {data.map((activity, index) => <Activity key={index} name={activity.description} time={activity.timeSpentInMinutes} id={activity.id} />)}
        </div>
    )
}

export default Activities;