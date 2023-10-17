import './App.css';
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/topBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {useState} from "react";
import Activities from "./structure/content/Activities";


function App() {
    const [user, setUser] = useState({user : localStorage.getItem('user'), id : localStorage.getItem('id')});

  return (
    <div className="App">
        <TopBar />
        <Menu />
        {!localStorage.getItem('user') && <div id="login-register">
            <LoginForm setUser={setUser} user={user}  />
            <RegisterForm />
        </div> }

        {localStorage.getItem('user') && <Activities user={user} /> }
    </div>
  );
}

export default App;
