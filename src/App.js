import './App.css';
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topBar";
import Content from "./structure/content/Content";

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
