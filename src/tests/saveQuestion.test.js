var functions = require("../utils/_DATA");

describe("saveQuestion", () => {
  it("verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.", async () => {
    const data = await functions._saveQuestion({
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "sarahedo",
    });
    expect(data.author).not.toBeNull();
    expect(data.optionOne).not.toBeNull();
    expect(data.optionTwo).not.toBeNull();
    expect(data.id).not.toBeNull();
  });
  it("An async unit test to verify that an error is returned if incorrect data is passed to the function.", async () => {
    await expect(functions._saveQuestion({})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author"
      
    );

});
})
