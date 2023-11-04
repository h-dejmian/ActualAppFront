import {useState} from "react";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Categories from "./Categories";
import PlanYourDay from "./PlanYourDay";
import About from "./About";
import MyExpenses from "./MyExpenses";
import Noted from "./noted/Noted";

function Content(props) {
    const menuItems = [
        <Activities user={props.user} />,
        <Categories user={props.user} />,
        <PlanYourDay />,
        <Noted user={props.user} />,
        <MyExpenses />,
        <Statistics user={props.user} />,
        <About />
    ]

    return (
        <div> {menuItems[props.selectedContent]} </div>
    )
}

export default Content