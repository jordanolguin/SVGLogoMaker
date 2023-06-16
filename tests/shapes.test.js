const Shapes = require("../lib/shapes");

describe("Shapes", () => {
  describe("setColor", () => {
    it("it should set the color of the shape based on user input", () => {
      const color = "red";
      const shape = new Shapes();
      shape.setColor(color);
      expect(shape.color).toEqual(color);
    });
  });
});
