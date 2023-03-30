import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import Leaderboard from "./components/Leaderboard";
import NewQuestion from "./components/NewQuestion";
import Login from "./components/Login";
import Error from "./components/Error";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(document.location.href);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {
          props.authedUser ? (
            <Routes>
              {/* <Route path="/login" exact element={<Login />} /> */}
              <Route path="/" exact element={<Home />} />
              <Route path="/questions/:question_id" element={<Question />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/error" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          ) : (
            <Login />
          )
          // <Route path="/login" exact element={<Login />} />
        }
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser.authedUser,
});

export default connect(mapStateToProps)(App);
