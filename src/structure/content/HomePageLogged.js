import TitleAndIcon from "./TitleAndIcon";

function HomePageLogged(props) {
    return (
        <div id="homepage-logged">
            <div>
                <p id="welcome-message">Welcome, {props.user.login} ! Here's what you can do: </p>
            </div>
            <div id="titles-and-icons">
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-bolt" name="Activities" />
                    <p className="subsite-desc">
                        Here you can add your daily activities and manage them.
                        Use calendar to select date.
                        Each activity can be marked as completed, deleted or updated
                    </p>
                </div>
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-list" name="Categories" />
                    <p className="subsite-desc">
                        This is the place where you can manage categories. You can add new ones, delete or update them.
                    </p>
                </div>
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-pen-to-square" name="Plan your day" />
                    <p className="subsite-desc">
                        This is the place where you can manage categories.
                    </p>
                </div>
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-icons" name="Noted" />
                    <p className="subsite-desc">
                        Noted is a place where you can keep all the things that you want to do in the nearest future.
                        Books you want read, movies you want to watch etc.
                    </p>
                </div>
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-chart-simple" name="Statistics" />
                    <p className="subsite-desc">
                        On this site you will see statistic data about your categories and activities.
                    </p>
                </div>
                <div className="subsite-element">
                    <TitleAndIcon className="fa-solid fa-question" name="About" />
                    <p className="subsite-desc">
                        Additional information about the app.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageLogged