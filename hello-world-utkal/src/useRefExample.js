import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const refVal = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refVal.current.value);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refVal} />
          <button type="submit" className="btn">
            Click Here
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefExample;
