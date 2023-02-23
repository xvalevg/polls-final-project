import { saveQuestion,saveQuestionAnswer } from "../utils/api";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const GET_AUTHED_USER_QUESTIONS = "GET_AUTHED_USER_QUESTIONS";
export const ASSIGN_ANSWER_TO_USER = "ASSIGN_ANSWER_TO_USER";
export const ASSIGN_QUESTION_TO_USER= "ASSIGN_QUESTION_TO_USER";

export function saveNewQuestion(info) {
  return (dispatch) => {
    return saveQuestion(info).then((question) => {
      dispatch(toggleSaveNewQuestion(question));
      dispatch(assignQuestionToUser(question))
    });
  };
}

function toggleSaveNewQuestion(question) {
  let questionToSend = { ...question };
  questionToSend.author = question.author.id;
  return {
    type: SAVE_QUESTION,
    question: questionToSend,
  };
}

function assignQuestionToUser(info) {
  return {
    type: ASSIGN_QUESTION_TO_USER,
    info: info
  }
}


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveAQuestionAnswer(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info).then((result) => {
      if(result) {
        dispatch(assignResponseToUser(info))
        dispatch(toggleSaveQuestionAnswer(info,result));
      }
    });
  };
}

function toggleSaveQuestionAnswer(info,result) {
  return {
    type: SAVE_QUESTION_ANSWER,
    info,
    result,
  };
}

function assignResponseToUser(info) {
  return {
    type: ASSIGN_ANSWER_TO_USER,
    info: info
  }
}

// export function getPendingQuestionsByAuthedUser() {
//   return (dispatch, getState) => {
//     const { authedUser } = getState();
//     dispatch(toggleGetPendingQuestions(authedUser));
//   };
// }

// function toggleGetPendingQuestions(authedUser) {
//   return {
//     type: GET_AUTHED_USER_QUESTIONS,
//     authedUser,
//   };
// }
