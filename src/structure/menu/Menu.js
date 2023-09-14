import '../../css/menu.css';
import MenuElement from "./MenuElement";
function Menu() {
    return (
        <div id="menu">
            <MenuElement name="Activities" />
            <MenuElement name="Plan your day" />
            <MenuElement name="My expenses" />
            <MenuElement name="Statistics" />
            <MenuElement name="About" />
        </div>
    )
}

export default Menu;