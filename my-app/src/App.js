import css from "./App.css";
/* import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content"; */
/* import ControlledForms from "./components/ControlledForms"; */
/* import UncontrolledForms from "./components/UncontrolledForms";
 */
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className={css.App}>
{/*       <NavBarForm />
      <Sidebar />
      <Content /> */}
{/*       <ControlledForms /> */}
      <SearchBar />
    </div>
  );
}

export default App;