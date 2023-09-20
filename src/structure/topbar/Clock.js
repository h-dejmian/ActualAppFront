import '../../css/top-bar.css'
import {useState} from "react";


function Clock() {
    let time = new Date().toLocaleString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString())
    }

    setInterval(updateTime);

    return <h2 id="clock"> Today is : {time} </h2>
}

export default Clock