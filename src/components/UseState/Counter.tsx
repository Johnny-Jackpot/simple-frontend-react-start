import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Click number: {count}</p>
      <button
        type="button"
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Add 1
      </button>
    </>
  );
};

export default Counter;
