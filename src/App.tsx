import "./App.css";
import { CustomInput } from "./components/UseImperativeHandle/CustomInput.tsx";
import { useRef } from "react";
// import { StatefullForm } from "./components/UseReduser/StatefullForm.tsx";
// import Counter from "./components/UseState/Counter.tsx";
// import Form from "./components/UseState/Form.tsx";
// import UserProfile from "./components/UseEffect/UserProfile.tsx";
// import CurrencyContext from "./components/UseContext/CurrencyContext.tsx";
// import { useState } from "react";
// import MeasuredHeight from "./components/UseLayoutEffect/MeasuredHeight.tsx";
// import UseRefExample from "./components/UseRef/UseRefExample.tsx";
// import LongList from "./components/UseTransition/LongList.tsx";
// import CurrenciesContainer from "./components/UseContext/CurrenciesContainer.tsx";
// import CalculationWithoutMemo from "./components/UseMemo/CalculationWithoutMemo.tsx";
// import UseMemoCalculation from "./components/UseMemo/UseMemoCalculation.tsx";

function App() {
  // const [price, setPrice] = useState(0);
  // const [count, setCount] = useState(0);
  // const [myArray, setMyArray] = useState<number[]>([]);
  // const handleSetMyArray = () => {
  //   setMyArray([...myArray, Math.floor(Math.random() * 100)]);
  // }

  const inputRef = useRef<CustomInput>(null);
  const handleFocus = () => {
      inputRef.current?.focus();
  };
  const handleClear = () => {
      inputRef.current?.clear();
  };

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
        {/*<CurrencyContext.Provider value={price}>*/}
        {/*  <h2>Currency converter</h2>*/}
        {/*  <h3>Put price in $:</h3>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    value={price}*/}
        {/*    onChange={(e) => setPrice(parseFloat(e.target.value))}*/}
        {/*  />*/}
        {/*  <CurrenciesContainer/>*/}
        {/*</CurrencyContext.Provider>*/}

        {/*<div>Counter value: {count}</div>*/}
        {/*<button className="button" onClick={() => setCount(count + 1)}>*/}
        {/*  Re-render*/}
        {/*</button>*/}
        {/*<button className="button" onClick={handleSetMyArray}>*/}
        {/*  Change my array*/}
        {/*</button>*/}
        {/*<CalculationWithoutMemo numbers={myArray}/>*/}
        {/*<UseMemoCalculation numbers={myArray}/>*/}
        {/*<UseRefExample />*/}
        {/*<MeasuredHeight />*/}
        {/*<LongList />*/}
        <CustomInput ref={inputRef} />
        <button className="button" onClick={handleFocus}>
          Focus
        </button>
        <button className="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
