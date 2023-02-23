// import { saveAuthedUser } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(info) {
  return (dispatch,getState) => {
    const {users} = getState();
    // return saveAuthedUser(info).then((userData) => {
    dispatch(toggleSetAuthedUser(info, users));
    // });
  };
}

function toggleSetAuthedUser(info,users) {
  return {
    type: SET_AUTHED_USER,
    info,
    users
  };
}
