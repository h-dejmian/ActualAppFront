import Activities from "./Activities";
import MyCalendar from "./MyCalendar";
import '../../css/content.css';


function Content() {
    return (
        <div className="content">
            <Activities />
            <MyCalendar />
        </div>
    )
}

export default Content;