import './App.css';
import Logo from "./logo";
import Activity from "./activity/Activity";
import MainMenu from "./MainMenu";

function App() {
  return (
    <div className="App">
        <Logo />
        <MainMenu />
        <Activity name="Arsch" time="300" />
        <Activity name="Arsch2" time="300" />
        <Activity name="Arsch3" time="300" />
        <Activity name="Arsch4" time="300" />
    </div>
  );
}

export default App;
