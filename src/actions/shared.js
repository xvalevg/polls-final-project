import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions}) => {
      console.log(users)
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    //   dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
