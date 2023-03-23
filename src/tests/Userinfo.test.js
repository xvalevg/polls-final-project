import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserInfo from "../components/UserInfo";


describe("Userinfo", () => {
  it("will show user info", () => {
    var component = render(
      <UserInfo
        u={{
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        }}
      />
    );

    expect(component.queryByTestId("title")).not.toBeNull();
    expect(component.queryByTestId("subtitle")).not.toBeNull();
    expect(component.queryByTestId("image")).not.toBeNull();

  });
});
