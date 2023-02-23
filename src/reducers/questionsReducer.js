import {
  SAVE_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
        // authedUser: {
        //   ...state.authedUser.questions.push(action.question.id),
        // },
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      let auxQuestions = { ...state };
      auxQuestions[action.info.qid][action.info.answer].votes.push(
        action.info.authedUser
      );
      return {
        ...state,
      };
    default:
      return state;
  }
}
