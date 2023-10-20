function LogoutSection(props) {
    function handleLogout() {
        localStorage.clear();
        props.setUser(null);
    }

    return (
        <div id="logout"> User {props.user.login} logged | <a className="button-sm" onClick={handleLogout}> Logout </a> </div>
    )
}

export default LogoutSection