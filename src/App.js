import './App.css';
import './css/login-form.css'
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/TopBar";
import LoginForm from "./structure/homepage/LoginForm";
import RegisterForm from "./structure/homepage/RegisterForm";
import {useEffect, useState} from "react";
import Content from "./structure/content/Content";
import LogoHome from "./structure/homepage/LogoHome";
import Api from "./api/Api";

export const api = new Api();

function App() {
    const oneHourInMilliseconds = 3600000;
    const [user, setUser] = useState({login : localStorage.getItem('login'),
                                                                            id : localStorage.getItem('id')});
    const [selectedContent, setSelectedContent] = useState(0);

    useEffect(() => validateUserLogTime);

    function validateUserLogTime() {
        const logTime = new Date(localStorage.getItem('logTime'));

        if(new Date().getTime() - logTime.getTime() > oneHourInMilliseconds) {
            clearUserCredentials();
        }
    }

    function clearUserCredentials() {
        localStorage.clear();
        setUser(null);
    }


  return (
    <div className="App">

        {
            !localStorage.getItem('login') && <div>

                <div id="top-bar-hp">
                    <div id="icons-left">
                        <i className="fa-solid fa-bicycle fa-2xl icon"></i>
                        <i className="fa-solid fa-guitar fa-2xl icon"></i>
                        <i className="fa-brands fa-itunes-note fa-2xl icon"></i>
                        <i className="fa-solid fa-person-running fa-2xl icon"></i>
                    </div>

                    <div id="top-bar-hp-center"><LogoHome /><h3>Place where you can start your growth!</h3></div>

                    <div id="icons-right">
                        <i className="fa-solid fa-book fa-2xl icon"></i>
                        <i className="fa-solid fa-keyboard fa-2xl icon"></i>
                        <i className="fa-solid fa-dumbbell fa-2xl icon"></i>
                        <i className="fa-solid fa-pen fa-2xl icon"></i>
                    </div>
                </div>
                <div id="login-register">
                    <LoginForm setUser={setUser} user={user} />
                    <RegisterForm />
                </div>
            </div>
        }

        {
            localStorage.getItem('login') && <div id="content">
            <TopBar />
            <Menu setSelectedContent={setSelectedContent} user={user} setUser={setUser} />
            <Content selectedContent={selectedContent} user={user} /> </div>
        }
    </div>
  );
}

export default App;
