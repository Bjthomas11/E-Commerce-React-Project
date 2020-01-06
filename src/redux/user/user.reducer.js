// set the state
const INITIAL_STATE = {
  currentUser: null
};

// state = current state when action get's fired so set it to the initial state
// action object is just an action and payload
// DEFAULT PARAMS VALUE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
