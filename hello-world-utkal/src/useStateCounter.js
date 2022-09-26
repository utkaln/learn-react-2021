import React, { useState } from "react";

const UseStateCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increaseCounter = () => {
    setTimeout(() => {
      setCounterValue((currState) => {
        return currState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h2>Counter</h2>
      <h1>{counterValue}</h1>
      <button className="btn" onClick={() => increaseCounter()}>
        Increase with Delay
      </button>
    </>
  );
};

export default UseStateCounter;
