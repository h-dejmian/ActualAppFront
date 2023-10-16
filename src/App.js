import './App.css';
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/topBar";
import Content from "./structure/content/Content";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {useState} from "react";


function App() {
    const [user, setUser] = useState("");

  return (
    <div className="App">
        <TopBar />
        <Menu />
        {!localStorage.getItem('userLogged') && <div id="login-register">
            <LoginForm setUser={setUser}  />
            <RegisterForm />
        </div> }

        {localStorage.getItem('userLogged') && <Content /> }
    </div>
  );
}

export default App;
