import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import QuestionOption from "./QuestionOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

function Question({ authedUser, question, user }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!question) {
      navigate("/error");
    }
  }, [question]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!question) {
      navigate("/error");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="question-container">
      <Nav />
      <p className="title">{`Poll by ${user?.name}`}</p>
      <img
        src={user?.avatarURL}
        alt={`Avatar of user`}
        className="question-avatar"
      />
      <p className="title"> Would you rather</p>
      <div className="question-options-container">
        {[
          { id: "optionOne", text: question?.optionOne?.text },
          { id: "optionTwo", text: question?.optionTwo?.text },
        ].map((q) => (
          <QuestionOption
            key={q.id}
            authedUser={authedUser}
            question={question}
            options={{ id: q.id, text: q.text }}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { question_id } = props.router.params;
  const question = questions[question_id];
  const user = users[question?.author];
  return { authedUser: authedUser.authedUser, question, user, question_id };
};

export default withRouter(connect(mapStateToProps)(Question));
