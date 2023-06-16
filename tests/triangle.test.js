const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  describe("render", () => {
    it("should render a triangle with a specific color based on user input", () => {
      const triangle = new Triangle();
      triangle.color = "red";
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="red"/>';
      const correctSvg = triangle.render();
      expect(correctSvg).toEqual(expectedSvg);
    });
  });
});
