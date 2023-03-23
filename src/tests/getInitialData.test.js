var functions = require("../utils/_DATA");

describe("getInitialData", () => {
  it("verify that more than 1 user are returned on get users call.", async () => {
    const users = await functions._getUsers({
    });
    expect(users).not.toBeNull();
    expect(Object.keys(users).length).toBeGreaterThan(2);
    expect(Object.keys(users)[0].id).not.toBeNull();

  });

})