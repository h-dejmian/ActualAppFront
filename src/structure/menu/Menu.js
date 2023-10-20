import '../../css/menu.css';
import MenuElement from "./MenuElement";
import Activities from "../content/Activities";
import Statistics from "../content/Statistics";
import LogoutSection from "./LogoutSection";
function Menu(props) {

    return (
        <div id="menu">
            <MenuElement name="Activities" id="0" setSelectedContent={props.setSelectedContent}/>
            <MenuElement name="Categories" id="2" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="Plan your day" id="0" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="My expenses" id="0" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="Statistics" id="1" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="About" id="0" setSelectedContent={props.setSelectedContent} />
            <LogoutSection user={props.user} setUser={props.setUser} />
        </div>
    )
}

export default Menu;