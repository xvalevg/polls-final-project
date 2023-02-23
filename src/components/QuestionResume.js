import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/helpers";

function QuestionResume({ p }) {
  const navigate = useNavigate();
  return (
    <div className="question">
      <div>
        <div className="question-author-container">
          <h6>{p.author}</h6>
        </div>
        <p className="question-time">{formatDate(p.timestamp)}</p>
      </div>
      <div className="question-icon-container">
        <button
          onClick={() => {
            navigate(`/questions/${p.id}`);
          }}
        >
          <i className="fas fa-eye"></i>
        </button>
      </div>
    </div>
  );
}

export default QuestionResume;
