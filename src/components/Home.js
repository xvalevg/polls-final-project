import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import QuestionResume from "./QuestionResume";

function Home({ authedUser, questions }) {
  const { answers } = authedUser;

  const [done, setdone] = useState([]);
  const [pending, setpending] = useState([]);
  const pendingKeys = Object.keys(questions)?.filter((q) => {
    if (!Object.keys(answers).find((a) => a === q)) return q;
  });
  const doneKeys = Object.keys(questions)?.filter((q) => {
    if (Object.keys(answers).find((a) => a === q)) return q;
  });

  useEffect(() => {
    let pendingAux = [];
    pendingKeys.forEach((k) => {
      pendingAux.push(questions[k]);
    });
    pendingAux.sort((a,b)=>b.timestamp - a.timestamp)

    let doneAux = [];
    doneKeys.forEach((k) => {
      doneAux.push(questions[k]);
    });
    doneAux.sort((a,b)=>b.timestamp - a.timestamp)
    
    setdone(doneAux);
    setpending(pendingAux);
  }, [questions]);

  return (
    <div className="home-container">
      <div>
        <p className="title">Pending</p>
        {pending.map((p) => (
          <QuestionResume p={p} key={p.id} />
        ))}
      </div>
      <div>
        <p className="title">Done</p>
        {done.map((p) => (
          <QuestionResume p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions }) => {
  return { authedUser: authedUser.authedUser, questions };
};

export default connect(mapStateToProps)(Home);
