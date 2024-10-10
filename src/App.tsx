import "./App.css";
import { StatefullForm } from "./components/UseReduser/StatefullForm.tsx";
import Counter from "./components/UseState/Counter.tsx";
import Form from "./components/UseState/Form.tsx";
import UserProfile from "./components/UseEffect/UserProfile.tsx";
import CurrencyContext from "./components/UseContext/CurrencyContext.tsx";
import { useState } from "react";
import CurrenciesContainer from "./components/UseContext/CurrenciesContainer.tsx";

function App() {
  const [price, setPrice] = useState(0);

  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        {/*<Counter />*/}
        {/*<Form />*/}
        {/*<StatefullForm />*/}
        {/*<UserProfile />*/}
        <CurrencyContext.Provider value={price}>
          <h2>Currency converter</h2>
          <h3>Put price in $:</h3>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <CurrenciesContainer/>
        </CurrencyContext.Provider>
      </div>
    </>
  );
}

export default App;
