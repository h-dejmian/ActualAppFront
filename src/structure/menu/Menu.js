import '../../css/menu.css';
import MenuElement from "./MenuElement";
import Activities from "../content/Activities";
import Statistics from "../content/Statistics";
import LogoutSection from "./LogoutSection";
function Menu(props) {

    return (
        <div id="menu">
            <MenuElement name="Activities" className="fa-solid fa-bolt" id="0" setSelectedContent={props.setSelectedContent}/>
            <MenuElement name="Categories" className="fa-solid fa-list" id="2" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="Plan your day" className="fa-solid fa-pen-to-square" id="0" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="My expenses" className="fa-solid fa-dollar-sign" id="0" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="Statistics" className="fa-solid fa-chart-simple" id="1" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="About" className="fa-solid fa-question" id="0" setSelectedContent={props.setSelectedContent} />
            <LogoutSection user={props.user} setUser={props.setUser} />
        </div>
    )
}

export default Menu;