import React, { useRef } from "react";

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = event.target.value;
      console.log(inputRef.current.value);
      console.dir(inputRef.current);
    }
  };
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <button className="button" onClick={focusInput}>
        Focus input
      </button>
      <button className="button" onClick={clearInput}>
        Clear input
      </button>
    </>
  );
};

export default UseRefExample;
