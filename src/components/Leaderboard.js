import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import UserInfo from "./UserInfo";

function Leaderboard({ users }) {
  let usersList = [];
  Object.keys(users).forEach((element) => {
    usersList.push(users[element]);
  });

  return (
    <div>
      <Nav/>
      <table className="customers">
        <thead>
          <tr>
          <th>User</th>
          <th>Answered</th>
          <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {usersList
            ?.sort((a, b) => b.questions.length - a.questions.length)
            .sort(
              (a, b) =>
                Object.keys(b.answers).length - Object.keys(a.answers).length
            )
            .map((u) => {
              return (
                <tr key={u.id}>
                  <td>
                    <UserInfo u={u} />
                  </td>
                  <td>{Object.keys(u.answers).length}</td>
                  <td>{u.questions.length}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = ({ authedUser, users }) => {
  return { authedUser: authedUser.authedUser, users };
};

export default connect(mapStateToProps)(Leaderboard);
