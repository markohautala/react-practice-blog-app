import css from "./App.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;