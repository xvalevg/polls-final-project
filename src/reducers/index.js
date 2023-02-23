import { combineReducers } from "redux";
import authedUser from "./authedUserReducer";
import questions from "./questionsReducer";
import users from "./usersReducer";

// import users from "./users";
// import tweets from "./tweets";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
});
