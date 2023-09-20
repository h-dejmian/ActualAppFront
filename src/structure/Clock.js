import '../css/top-bar.css'
import {useState} from "react";


function Clock() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString())
    }

    setInterval(updateTime);

    return <h2 id="clock"> {time} </h2>
}

export default Clock