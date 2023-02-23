import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveAQuestionAnswer } from "../actions/questions";

function QuestionOption({ dispatch, authedUser, question, options }) {

  const navigate = useNavigate();

  const validateIfIVoted = () => {
    const found = question[options.id].votes.find((p) => p === authedUser.id);
    if (found) return <p className="title">{`You voted me :)`}</p>;

    return <p>{`You didn't vote me :(`}</p>;;
  };

  const handleSaveAnswer = () => {
    dispatch(
      saveAQuestionAnswer({
        authedUser: authedUser.id,
        qid: question.id,
        answer: options.id,
      })
    );
    navigate("/");
  };

  const calculateVotes = (optionVotes) => {
    var opt1 = question["optionOne"].votes.length;
    var opt2 = question["optionTwo"].votes.length;
    var calculation = (optionVotes / (opt1 + opt2)) * 100;
    return calculation;
  };

  return (
    <div className="question-option">
      <p className="subtitle"> {options.text} </p>
      {!Object.keys(authedUser.answers).find((a) => a === question.id) ? (
        <button
          className="vote-me"
          onClick={(e) => {
            handleSaveAnswer();
          }}
        >
          Vote me
        </button>
      ) : (
        <div className="vote-me">
          <button>{validateIfIVoted()}</button>
          <p></p>
          <p>{`${question[options.id].votes.length} votes - ${calculateVotes(
            question[options.id].votes.length
          )}%`}</p>
        </div>
      )}
    </div>
  );
}

export default connect()(QuestionOption);
