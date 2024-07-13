import css from "./App.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Loader from "./components/Loader";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content />
      <Loader />
    </div>
  );
}

export default App;