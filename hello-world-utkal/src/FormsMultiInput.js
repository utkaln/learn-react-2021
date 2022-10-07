import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FormsMultiInput = () => {
  const [user, setUser] = useState({ loginTxt: "", email: "", location: "" });
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.loginTxt && user.email && user.location) {
      setUsers([...users, user]);
      setUser({ loginTxt: "", email: "", location: "" });
    }
  };
  const handleUserInput = (event) => {
    const inputName = event.target.name;
    const inputVal = event.target.value;
    // use dynamic property of ES6 to directly set the value without having to declare the var name explicitly
    setUser({ ...user, [inputName]: inputVal });
    //console.log(user);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="loginTxt"> Log In: </label>
            <input
              type="text"
              id="loginTxt"
              name="loginTxt"
              value={user.loginTxt}
              onChange={handleUserInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleUserInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Location: </label>
            <input
              type="text"
              id="location"
              name="location"
              value={user.location}
              onChange={handleUserInput}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {users.map((user, index) => {
          return (
            <div className="item" key={index}>
              <h3>{user.loginTxt}</h3>
              <h4>{user.email}</h4>
              <h4>{user.location}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default FormsMultiInput;
