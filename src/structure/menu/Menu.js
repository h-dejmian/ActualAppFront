import '../../css/menu.css';
import MenuElement from "./MenuElement";
import Activities from "../content/Activities";
import Statistics from "../content/Statistics";
function Menu(props) {

    return (
        <div id="menu">
            <MenuElement name="Activities" id="0" setSelectedContent={props.setSelectedContent}/>
            <MenuElement name="Plan your day" id="3" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="My expenses" id="2" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="Statistics" id="1" setSelectedContent={props.setSelectedContent} />
            <MenuElement name="About" id="4" setSelectedContent={props.setSelectedContent} />
        </div>
    )
}

export default Menu;