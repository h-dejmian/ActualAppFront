function HomePageLogged(props) {
    return (
        <div>
            <h2 id="welcome-message">Welcome {props.user.login}</h2>


        </div>
    )
}

export default HomePageLogged