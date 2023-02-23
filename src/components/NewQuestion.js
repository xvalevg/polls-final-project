import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveNewQuestion } from "../actions/questions";

function NewQuestion({ dispatch, authedUser, questions }) {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  useEffect(() => {
    if (
      Object.keys(questions)?.find(
        (q) => questions[q].optionOne.text === firstOption
      )
    )
      navigate("/");
  }, [questions]);

  const handleChangeFirstOption = (e) => {
    setFirstOption(e.target.value);
  };
  const handleChangeSecondOption = (e) => {
    setSecondOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveNewQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: authedUser,
      })
    );
  };
  return (
    <div className="new-question-container">
      <p className="title">Would You Rather</p>
      <p className="subtitle">Create your own poll</p>
      <form className="new-question" onSubmit={handleSubmit}>
        <p className="subtitle">First Option</p>
        <textarea
          placeholder="First Option"
          value={firstOption}
          onChange={handleChangeFirstOption}
          className="textarea"
        />
        <p className="subtitle">Second Option</p>
        <textarea
          placeholder="Second Option"
          value={secondOption}
          onChange={handleChangeSecondOption}
          className="textarea"
        />
        <button
          className="btn"
          type="submit"
          disabled={firstOption === "" || secondOption === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions }) => {
  return { authedUser: authedUser.authedUser, questions };
};

export default connect(mapStateToProps)(NewQuestion);
