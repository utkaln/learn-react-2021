import React, { useState } from "react";
import { memberObjData } from "./memberObjData";

const UseStateObject = () => {
  const [memberObj, setMember] = useState(memberObjData);

  console.log("Member Obj -->", memberObj);
  const updateMemberName = () => {
    setMember({ ...memberObj, memName: "New Name" });
  };
  return (
    <>
      <div key={memberObj.memId} className="item">
        <h4>{memberObj.memName}</h4>
      </div>
      <button className="btn" onClick={() => updateMemberName()}>
        Update Info
      </button>
      <button className="btn" onClick={() => setMember([])}>
        Reset List
      </button>
    </>
  );
};

export default UseStateObject;
