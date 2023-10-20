import './App.css';
import './css/login-form.css'
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/TopBar";
import LoginForm from "./loginregister/LoginForm";
import RegisterForm from "./loginregister/RegisterForm";
import {useState} from "react";
import LogoLogged from "./structure/topbar/LogoLogged";
import Content from "./structure/content/Content";
import LogoHome from "./loginregister/LogoHome";


function App() {
    const [user, setUser] = useState({login : localStorage.getItem('login'),
                                                                            id : localStorage.getItem('id')});

    const [selectedContent, setSelectedContent] = useState(0);


  return (
    <div className="App">

        {
            !localStorage.getItem('login') && <div>

                <div id="top-bar-hp">
                    <LogoHome />
                    <h3>Place where you can start your growth!</h3>
                </div>
                <div id="login-register">
                    <LoginForm setUser={setUser} user={user} />
                    <RegisterForm />
                </div>
            </div>
        }

        {
            localStorage.getItem('login') && <div id="content">
            <TopBar user={user} setUser={setUser} />
            <Menu setSelectedContent={setSelectedContent} />
            <Content selectedContent={selectedContent} user={user} /> </div>
        }
    </div>
  );
}

export default App;
