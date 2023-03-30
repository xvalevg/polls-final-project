import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function Login({ dispatch, authedUser }) {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(sessionStorage.getItem("currentPage"));
  //   if (authedUser !== null) {
  //     if (sessionStorage.getItem("currentPage")) {
  //       if (sessionStorage.getItem("currentPage") === "/login") {
  //         navigate("/");
  //       } else {
  //         navigate(sessionStorage.getItem("currentPage"));
  //       }
  //     } else {
  //       navigate("/");
  //     }
  //   }
  // }, [authedUser]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser({ name, password }));

    if (document.location.href.includes("login")) {
      navigate("/");
    }

    // console.log(sessionStorage.getItem("currentPage"));
    // if (sessionStorage.getItem("currentPage")) {
    //   if (sessionStorage.getItem("currentPage") === "/login") {
    //     dispatch(setCurretPage("/"));
    //   } else {
    //     dispatch(setCurretPage(sessionStorage.getItem("currentPage")));
    //   }
    // } else {
    //   dispatch(setCurretPage("/"));
    // }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <p className="title">Welcome Back</p>
        <img
          src={
            "https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?w=1380&t=st=1677109476~exp=1677110076~hmac=b3dead46b14874d0bd49c92abbfccc427796efcf238bcbb1df42940c1889f577"
          }
          alt={`Login`}
          className="avatar"
        />
      </div>
      <form
        className="login-data-container"
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <input
          type="text"
          value={name}
          data-testid="name-input"
          placeholder="Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <input
          type="password"
          data-testid="password-input"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <button type="submit" className="login-btn" data-testid="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return { authedUser: authedUser?.authedUser };
};

export default connect(mapStateToProps)(Login);
