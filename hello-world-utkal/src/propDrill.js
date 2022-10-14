import React, { useState } from "react";
import { memberData } from "./membersdata";

const PropDrilling = () => {
  const [users, setUsers] = useState(memberData);
  const removeUser = (memId) => {
    console.log("Clicked Remove");
    setUsers((users) => {
      return users.filter((user) => user.id !== memId);
    });
  };
  return (
    <>
      <h2>Prop Drilling Starts here !</h2>
      <ShowUserList users={users} removeUser={removeUser} />
    </>
  );
};

const ShowUserList = ({ users, removeUser }) => {
  return (
    <>
      {users.map((user) => {
        return <ShowMemberDetails user={user} removeUser={removeUser} />;
      })}
    </>
  );
};

const ShowMemberDetails = ({ user, removeUser }) => {
  return (
    <div className="item">
      <p>{user.memName}</p>
      <button onClick={() => removeUser(user.memId)}>Remove</button>
    </div>
  );
};
export default PropDrilling;
