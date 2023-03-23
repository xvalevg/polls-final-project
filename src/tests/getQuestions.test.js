var functions = require("../utils/_DATA");

describe("getQuestions", () => {
  it("verify that more than 1 question are returned on get questions call.", async () => {
    const questions = await functions._getQuestions({
    });
    expect(questions).not.toBeNull();
    expect(Object.keys(questions).length).toBeGreaterThan(2);
    expect(Object.keys(questions)[0].id).not.toBeNull();

  });

})