import Activities from "./Activities";
import MyCalendar from "./MyCalendar";
import '../../css/content.css';
import {Component} from "react";


class Content extends Component {
    constructor() {
        super()
    }


    render () {
        return (
            <div className="content">
                <Activities/>
                <MyCalendar/>
            </div>
        )
    }

}

export default Content;