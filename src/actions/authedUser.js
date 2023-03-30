// import { saveAuthedUser } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function setAuthedUser(info) {
  return (dispatch, getState) => {
    const { users } = getState();
    // return saveAuthedUser(info).then((userData) => {
    //dispatch(toggleSetAuthedUser(info, users));
    dispatch({ type: SET_AUTHED_USER, info, users });
    // });
  };
}


export function setCurretPage(info) {
  return (dispatch, getState) => {
    const { currentPage } = getState();
    sessionStorage.setItem("currentPage", info);
    dispatch(toggleSetCurrentPage(info, currentPage));
  };
}

function toggleSetCurrentPage(info, currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    info,
    currentPage,
  };
}
