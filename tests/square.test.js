const Square = require("../lib/square");

describe("Square", () => {
  describe("render", () => {
    it("it should render a square with a specific color based on user input", () => {
      const square = new Square();
      square.color = "red";
      const expectedSvg =
        '<rect x="10" y="10" width="195" height="195" fill="red"/>';
      expect(square.render()).toEqual(expectedSvg);
    });
  });
});
