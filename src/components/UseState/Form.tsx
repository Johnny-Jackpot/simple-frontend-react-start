import React, { useState, ChangeEvent } from "react";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Our text: {inputValue}</p>
    </form>
  );
};

export default Form;
