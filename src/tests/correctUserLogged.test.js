var functions = require("../actions/authedUser");

describe("getInitialData", () => {
  it("verify that a user is returned if loggin credentials are correct", async () => {
    const user = await functions.setAuthedUser({ name:"sarahedo", password: "password123" });
    expect(user).not.toBeNull();
  });

})