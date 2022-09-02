const delayFunction = require("./delayFunction");

describe("delayFunction", function () {
  it("should return 10", async function () {
    const sum = await delayFunction(() => 5 + 5, 2000);

    expect(sum).toBe(10);
  });
});
