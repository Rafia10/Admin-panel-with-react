// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./reducers/AuthReducer";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // Add other reducers if needed
});

export default rootReducer;
