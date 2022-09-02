const getNumberSquare = require("./getNumberSquare");

describe("getNumberSquare", function () {
  // We need this, because spyOn reduce method call times with each test (test 4 and 5)
  beforeEach(() => jest.clearAllMocks());

  it("should return correct value", function () {
    expect(getNumberSquare(2)).toBe(4);
  });

  it("should return value less than 5", function () {
    expect(getNumberSquare(2)).toBeLessThan(5);
  });

  it("should return value less than or equal 4", function () {
    expect(getNumberSquare(2)).toBeLessThanOrEqual(4);
  });

  it("should call Math.pow method 1 times", function () {
    const spyOnMath = jest.spyOn(Math, "pow");

    getNumberSquare(2);

    expect(spyOnMath).toBeCalledTimes(1);
  });

  it("should call Math.pow method 0 times", function () {
    const spyOnMath = jest.spyOn(Math, "pow");

    getNumberSquare(1);

    expect(spyOnMath).toBeCalledTimes(0);
  });
});
