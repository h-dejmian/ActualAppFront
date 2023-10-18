import '../../css/top-bar.css'
import Logo from "./logo";
import Clock from "./Clock";

function TopBar(props) {
    function handleLogout() {
        localStorage.clear();
        props.setUser(null);
    }

    return (
        <div id="top-bar"> <Logo /> User {props.user.login} logged | <button onClick={handleLogout}> Logout </button> <Clock /> </div>
    )
}

export default TopBar;