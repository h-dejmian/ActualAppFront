import Activities from "./Activities";
import Calendar from "./Calendar";
import '../../css/content.css';


function Content() {
    return (
        <div className="content">
            <Activities />
            <Calendar />
        </div>
    )
}

export default Content;