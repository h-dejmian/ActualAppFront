import {useState} from "react";
import Activities from "./Activities";
import Statistics from "./Statistics";

function Content(props) {
    const menuItems = [<Activities user={props.user} />,
                                <Statistics user={props.user} />]

    return (
        <div> {menuItems[props.selectedContent]} </div>
    )
}

export default Content