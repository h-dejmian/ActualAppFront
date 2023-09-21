import '../../css/top-bar.css'
import {useState} from "react";


function Clock() {
    let dateAndTime = new Date().toLocaleString();
    const [currentTime, setCurrentTime] = useState(dateAndTime);

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString())
    }

    setInterval(updateTime);

    return <h2 id="clock"> {dateAndTime} </h2>
}

export default Clock