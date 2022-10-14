import React, { useState, useContext } from "react";
import { memberData } from "./membersdata";
const ExampleContext = React.createContext();

const ContextApi = () => {
  const [users, setUsers] = useState(memberData);
  const removeUser = (memId) => {
    setUsers((users) => {
      return users.filter((user) => user.memId !== memId);
    });
  };
  return (
    <ExampleContext.Provider value={{ removeUser }}>
      <h2>Use Context Starts here !</h2>
      <ShowUserList users={users} />
    </ExampleContext.Provider>
  );
};

const ShowUserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return <ShowMemberDetails key={user.memId} user={{ ...user }} />;
      })}
    </>
  );
};

const ShowMemberDetails = ({ user }) => {
  const { memId, memName } = user;
  const { removeUser } = useContext(ExampleContext);
  return (
    <div className="item">
      <p>{memName}</p>
      <button onClick={() => removeUser(memId)}>Remove</button>
    </div>
  );
};
export default ContextApi;
