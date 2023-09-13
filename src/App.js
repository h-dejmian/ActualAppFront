import './App.css';
import Logo from "./logo";
import Activity from "./activity/Activity";
import Menu from "./menu/Menu";

function App() {
  return (
    <div className="App">
        <Logo />
        <Menu />
        <Activity name="Activity1" time="300" />
        <Activity name="Activity2" time="300" />
        <Activity name="Activity3" time="300" />
        <Activity name="Activity4" time="300" />
    </div>
  );
}

export default App;
