export const reducer = (state, action) => {
  if (action.type === "ADD_MEMBER") {
    // always try to keep the old values before adding
    const newMemData = [...state.users, action.payload];
    return {
      ...state,
      users: newMemData,
      showModal: true,
      modalContent: "Updated content from reducer",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  } else if (action.type === "REMOVE_USER") {
    const filteredUsers = state.users.filter(
      (user) => user.id !== action.payload
    );

    return {
      ...state,
      users: filteredUsers,
      showModal: true,
      modalContent: "User Removed",
    };
  } else {
    return {
      ...state,
      showModal: true,
      modalContent: "No Input provided",
    };
  }
};
