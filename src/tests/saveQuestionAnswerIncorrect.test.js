var functions = require("../utils/_DATA");

describe("saveQuestionAnswerIncorrect", () => {
  it("An async unit test to verify that an error is returned if incorrect data is passed to the function.", async () => {
    await expect(functions._saveQuestionAnswer({})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
