import '../../css/top-bar.css'
import LogoLogged from "./LogoLogged";
import Clock from "./Clock";

function TopBar(props) {
    function handleLogout() {
        localStorage.clear();
        props.setUser(null);
    }

    return (
        <div id="top-bar"> <LogoLogged /> User {props.user.login} logged | <button onClick={handleLogout}> Logout </button> <Clock /> </div>
    )
}

export default TopBar;