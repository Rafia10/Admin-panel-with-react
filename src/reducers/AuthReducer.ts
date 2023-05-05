// authReducer.js
const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "CHANGE_PASS":
      return {
        ...state,
        isLogggedIn: true,
        user: action.payload,
      };
    case "LOGIN_FAILED":
      // Assuming the error message is included in the action payload
      // eslint-disable-next-line no-case-declarations
      const error = action.payload;
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: error,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
