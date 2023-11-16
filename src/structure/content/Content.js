import Activities from "./Activities";
import Statistics from "./Statistics";
import Categories from "./Categories";
import PlanYourDay from "./plannedactivities/PlanYourDay";
import About from "./About";
import Noted from "./noted/Noted";
import HomePageLogged from "./HomePageLogged";

function Content(props) {
    const menuItems = [
        <HomePageLogged user={props.user} />,
        <Activities user={props.user} />,
        <Categories user={props.user} />,
        <PlanYourDay user={props.user} />,
        <Noted user={props.user} />,
        <Statistics user={props.user} />,
        <About />
    ]

    return (
        <div> {menuItems[props.selectedContent]} </div>
    )
}

export default Content