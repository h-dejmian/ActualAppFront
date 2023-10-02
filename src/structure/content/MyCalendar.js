import '../../css/content.css';
import {useState} from "react";
import Calendar from "react-calendar";
import '../../css/calendar.css';
import moment from "moment";


function MyCalendar(props) {
    const [date, setDate] = useState(moment(new Date).format("yyyy-MM-DD"));

    const onChange = (selectedDate) => {
        setDate(moment(selectedDate).format("yyyy-MM-DD"));
        props.fetchActivitiesByDate(moment(selectedDate).format("yyyy-MM-DD"));
    }

    return (
        <div className="calendar"> <Calendar onChange={onChange} value={date}/>
            <p> Wybrana data: {date}</p>
        </div>
    )
}

export default MyCalendar;