import css from "./App.css";
/* import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content"; */
import ControlledForms from "./components/ControlledForms";

function App() {
  return (
    <div className={css.App}>
{/*       <NavBarForm />
      <Sidebar />
      <Content /> */}
      <ControlledForms />
    </div>
  );
}

export default App;