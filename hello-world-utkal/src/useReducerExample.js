import React, { useState, useReducer } from "react";
import { memberData } from "./membersdata";
import Modal from "./Modal";
import { reducer } from "./reducer";

const defaultState = {
  users: [],
  showModal: false,
  modalContent: "New content of the Modal",
};
const UseReducerExample = () => {
  const [inputTxt, setInputTxt] = useState("");
  // state is the object value returned from useReducer
  // dispatch is the name of the function that will change behavior of an object
  // defaultstate is the object value returned before dispatch is invoked
  // once dispatch is invoked, it must return an updated state object, the defaultstate will be overridden

  const [state, dispatch] = useReducer(reducer, defaultState);

  // function to handle submission of form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputTxt) {
      const newMember = {
        id: new Date().getTime().toString(),
        memName: inputTxt,
      };
      // dispatch is the name of the function, type is the object
      dispatch({ type: "ADD_MEMBER", payload: newMember });
      setInputTxt("");
    } else {
      dispatch({ type: "EMPTY_ENTRY" });
    }
  };

  // function to close the modal after a delay
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.showModal && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputTxt}
          onChange={(event) => setInputTxt(event.target.value)}
        />
        <button type="submit" className="btn">
          Click
        </button>
      </form>
      <article>
        {state.users.map((user) => {
          return (
            <div key={user.id} className="item">
              <p>{user.memName}</p>
              <button
                className="btn"
                type="button"
                onClick={() =>
                  dispatch({ type: "REMOVE_USER", payload: user.id })
                }
              >
                Remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default UseReducerExample;
