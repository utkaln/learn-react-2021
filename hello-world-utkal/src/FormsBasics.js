import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FormsBasics = () => {
  const [loginTxt, setLoginTxt] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginTxt && email) {
      const userData = { loginTxt, email };
      setUsers([...users, userData]);
      setLoginTxt("");
      setEmail("");
    } else {
      console.log("Incomplete Data");
    }
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
              value={loginTxt}
              onChange={(event) => setLoginTxt(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {users.map((user, index) => {
          const { loginTxt, email } = user;
          return (
            <div className="item" key={index}>
              <h3>{loginTxt}</h3>
              <h4>{email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default FormsBasics;
