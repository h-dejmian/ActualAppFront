import './App.css';
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/topBar";
import LoginForm from "./loginregister/LoginForm";
import RegisterForm from "./loginregister/RegisterForm";
import {useState} from "react";
import Logo from "./structure/topbar/logo";
import Content from "./structure/content/Content";


function App() {
    const [user, setUser] = useState({login : localStorage.getItem('login'),
                                                                            id : localStorage.getItem('id')});

    const [selectedContent, setSelectedContent] = useState(0);


  return (
    <div className="App">

        {
            !localStorage.getItem('login') && <div id="login-register">
            <Logo/>
            <LoginForm setUser={setUser} user={user} />
            <RegisterForm /> </div>
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
