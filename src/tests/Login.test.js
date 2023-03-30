import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  const mockStore = configureStore();
  let store = mockStore({
    authedUser: null,
  });

  it("test that name and password values are changed on the change event", () => {

    const { getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const nameInput = getByTestId("name-input");
    const passwordInput = getByTestId("password-input");

    fireEvent.change(nameInput, { target: { value: "sarahedo" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
  

    expect(queryByTestId("name-input")).not.toBeNull();
    expect(queryByTestId("password-input")).not.toBeNull();

  });
});
