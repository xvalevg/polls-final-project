import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthedUser,setCurretPage } from "../actions/authedUser";


function Nav({ dispatch, authedUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authedUser) {
      navigate("/login");
    }
  }, [authedUser]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    dispatch(setAuthedUser(null));
  };

  const saveCurrentPage = (page) => {
    dispatch(setCurretPage(page));
  };
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                saveCurrentPage("/");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              onClick={() => {
                saveCurrentPage("/leaderboard");
              }}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              onClick={() => {
                saveCurrentPage("/add");
              }}
            >
              New Poll
            </Link>
          </li>
        </ul>
      </nav>
      <div className="authed-header">
        {authedUser ? <p className="subtitle">{authedUser.name}</p> : null}
        {authedUser ? (
          <img
            src={authedUser.avatarURL}
            alt={`${authedUser?.name?.substring(0, 1)}`}
            className="avatar"
          />
        ) : null}
        <button onClick={handleClick}> Logout</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return { authedUser: authedUser.authedUser };
};

export default connect(mapStateToProps)(Nav);
