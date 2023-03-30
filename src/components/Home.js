import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionResume from "./QuestionResume";

function Home({ authedUser, questions }) {
  const { answers } = authedUser;

  const [selectedOption, setSelectedOption] = useState("all");

  const [done, setdone] = useState([]);
  const [pending, setpending] = useState([]);
  const pendingKeys = Object.keys(questions)?.filter((q) => {
    if (!Object.keys(answers).find((a) => a === q)) {
      return q;
    }
    return false; 
  });
  const doneKeys = Object.keys(questions)?.filter((q) => {
    if (Object.keys(answers).find((a) => a === q)) {return q;}
    return 
  });

  useEffect(() => {
    let pendingAux = [];
    pendingKeys.forEach((k) => {
      pendingAux.push(questions[k]);
    });
    pendingAux.sort((a, b) => b.timestamp - a.timestamp);

    let doneAux = [];
    doneKeys.forEach((k) => {
      doneAux.push(questions[k]);
    });
    doneAux.sort((a, b) => b.timestamp - a.timestamp);

    setdone(doneAux);
    setpending(pendingAux);
  }, [questions]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Nav />
      <div className="options-container">
        <label>Options: </label>
        <label>
          <input
            type="radio"
            name="option"
            value="all"
            checked={selectedOption === "all"}
            onChange={handleOptionChange}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="pending"
            checked={selectedOption === "pending"}
            onChange={handleOptionChange}
          />
          Pending
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="done"
            checked={selectedOption === "done"}
            onChange={handleOptionChange}
          />
          Done
        </label>
      </div>
      <div className="home-container">
        {(selectedOption === "all" || selectedOption === "pending") && (
          <div>
            <p className="title">Pending</p>
            {pending.map((p) => (
              <QuestionResume p={p} key={p.id} />
            ))}
          </div>
        )}
        {(selectedOption === "all" || selectedOption === "done") && (
          <div>
            <p className="title">Done</p>
            {done.map((p) => (
              <QuestionResume p={p} key={p.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions }) => {
  return { authedUser: authedUser.authedUser, questions };
};

export default connect(mapStateToProps)(Home);
