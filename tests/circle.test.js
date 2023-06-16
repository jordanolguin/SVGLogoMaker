const Circle = require("../lib/circle");

describe("Circle", () => {
  describe("render", () => {
    it("it should render a circle with a specific color based on user input", () => {
      const circle = new Circle();
      circle.color = "red";
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red"/>';
      expect(circle.render()).toEqual(expectedSvg);
    });
  });
});
