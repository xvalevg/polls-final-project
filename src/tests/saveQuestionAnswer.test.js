var functions = require("../utils/_DATA");

describe("saveQuestionAnswer", () => {
  it("An async unit test to verify that true is returned when correctly formatted data is passed to the function.", async () => {
    const data = await functions._saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });
    expect(data.authedUser).not.toBeNull();
    expect(data.qid).not.toBeNull();
    expect(data.answer).not.toBeNull();
  });
  it("An async unit test to verify that an error is returned if incorrect data is passed to the function.", async () => {
    await expect(functions._saveQuestionAnswer({})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
