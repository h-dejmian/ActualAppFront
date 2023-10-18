import {useState} from "react";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Categories from "./Categories";

function Content(props) {
    const menuItems = [
        <Activities user={props.user} />,
        <Statistics user={props.user} />,
        <Categories />
    ]

    return (
        <div> {menuItems[props.selectedContent]} </div>
    )
}

export default Content