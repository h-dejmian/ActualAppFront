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
        {!localStorage.getItem('user') && <div id="login-register">
            <LoginForm setUser={setUser}  />
            <RegisterForm />
        </div> }

        {localStorage.getItem('user') && <Content /> }
    </div>
  );
}

export default App;
