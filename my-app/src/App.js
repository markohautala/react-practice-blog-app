import css from "./App.css";
/* import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content"; */
/* import ControlledForms from "./components/ControlledForms"; */
import UncontrolledForms from "./components/UncontrolledForms";

function App() {
  return (
    <div className={css.App}>
{/*       <NavBarForm />
      <Sidebar />
      <Content /> */}
{/*       <ControlledForms /> */}
      <UncontrolledForms />
    </div>
  );
}

export default App;