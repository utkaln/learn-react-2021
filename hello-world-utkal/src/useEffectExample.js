import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
  const [counterValue, setCounterValue] = useState(0);
  useEffect(() => {
    console.log("Use Effect Called");
    if (counterValue > 0) {
      document.title = `New Messages${counterValue}`;
    }
  });
  console.log("Component Rendered");
  return (
    <>
      <h2>Example of useEffect</h2>
    </>
  );
};

export default UseEffectExample;
