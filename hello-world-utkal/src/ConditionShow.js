import React, { useState, useEffect } from "react";
const ConditionShow = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <ItemToShow />}
    </>
  );
};

// define the component to be manipulated with state value
const ItemToShow = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const calculateSize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", calculateSize);
    //important to clean up, since the Item component renders with each toggle
    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window Size</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};

export default ConditionShow;
