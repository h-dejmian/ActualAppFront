import './App.css';
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/topBar";
import Content from "./structure/content/Content";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <div className="App">
        <TopBar />
        <Menu />
        <div id="login-register">
            <LoginForm />
            <RegisterForm />
        </div>


        {/*<Content />*/}
    </div>
  );
}

export default App;
