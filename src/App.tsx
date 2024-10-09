import "./App.css";
import {StatefullForm} from "./components/UseReduser/StatefullForm.tsx";
import Counter from "./components/UseState/Form.tsx";

function App() {
  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        <Counter />
        {/*<StatefullForm />*/}
      </div>
    </>
  );
}

export default App;
