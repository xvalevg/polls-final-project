var saveQuestionAnswer = require("../utils/api");

describe("saveQuestionAnswer", () => {
  it("An async unit test to verify that true is returned when correctly formatted data is passed to the function", async () => {
    const data = await saveQuestionAnswer({
        authedUser: "sarahedo",
        qid: "xj352vofupe1dqz9emx13r",
        answer: "optionOne",
    });
    expect(data).toBe(true);
  });
  it("An async unit test to verify that an error is returned if incorrect data is passed to the function.", async () => {
    const failedData = await saveQuestionAnswer({});
    expect(failedData).rejects(
      "Please provide authedUser, qid, and answer"
    );
  });
});
