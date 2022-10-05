import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
  const [counterValue, setCounterValue] = useState(0);
  useEffect(() => {
    if (counterValue > 0) {
      document.title = `New Messages (${counterValue})`;
    }
  }, [counterValue]);

  return (
    <>
      <h2>Example of useEffect</h2>
      <h1>{counterValue}</h1>
      <button
        className="btn"
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        Counter
      </button>
    </>
  );
};

export default UseEffectExample;
