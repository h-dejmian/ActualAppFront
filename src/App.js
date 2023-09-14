import './App.css';
import Logo from "./logo";
import Activity from "./activity/Activity";
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topBar";
import Content from "./structure/Content";

function App() {
  return (
    <div className="App">
        <TopBar />
        <Menu />
        <Content />
    </div>
  );
}

export default App;
