import '../../css/top-bar.css'
import LogoLogged from "./LogoLogged";
import Clock from "./Clock";

function TopBar(props) {
    return (
        <div id="top-bar"> <LogoLogged />  <Clock /> </div>
    )
}

export default TopBar;