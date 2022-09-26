import React from "react";
import { memberData } from "./membersdata";

const UseStateArray = () => {
  const [member, setMember] = React.useState(memberData);
  const removeMember = (id) => {
    let newMemberList = member.filter((indiv) => indiv.memId !== id);
    setMember(newMemberList);
    console.log("Removed --> ", id);
  };
  return (
    <React.Fragment>
      {member.map((indiv) => {
        const { memId, memName } = indiv;
        return (
          <div key={memId} className="item">
            <h4>{memName}</h4>
            <button onClick={() => removeMember(memId)}> Remove Member </button>
          </div>
        );
      })}
      <button onClick={() => setMember([])}>Reset List</button>
    </React.Fragment>
  );
};

export default UseStateArray;
