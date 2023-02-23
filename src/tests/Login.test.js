import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("will login if data is correct", () => {
    var component = render(
      <MemoryRouter>
        <Provider>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    var nameinput = component.getByTestId("name-input");
    fireEvent.change(nameinput, { target: { value: "sarahedo" } });
    var passwordinput = component.getByTestId("name-input");
    fireEvent.change(passwordinput, { target: { value: "password123" } });

    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("name-input")).not.toBeInTheDocument();
  });
});
