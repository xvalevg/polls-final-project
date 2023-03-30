import { SET_AUTHED_USER, SET_CURRENT_PAGE } from "../actions/authedUser";
import {
  ASSIGN_ANSWER_TO_USER,
  ASSIGN_QUESTION_TO_USER,
} from "../actions/questions";

const initialState = {
  authedUser: null
};

const saveAuthedUser = (info, users) => {
  const usersArray = Object.keys(users);
  if (!usersArray) {
    return null;
  }
  if (info === null) {
    return null;
  }
  if (info.name === "" || info.password === "") {
    return null;
  }
  const found = usersArray.find((u) => {
    return users[u].id === info.name && users[u].password === info.password;
  });
  if (found) {
    return users[found];
  } else {
    return null;
  }
};

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        authedUser: saveAuthedUser(action.info, action.users),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.info,
      };
    case ASSIGN_ANSWER_TO_USER:
      let aux = {
        ...state,
      };

      aux.authedUser.answers[action.info.qid] = action.info.answer;
      return aux;

    case ASSIGN_QUESTION_TO_USER:
      let auxState = {
        ...state,
      };

      auxState.authedUser.questions.push(action.info.id);
      return auxState;

    default:
      return state;
  }
}
