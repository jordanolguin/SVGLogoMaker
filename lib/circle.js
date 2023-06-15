const Shapes = require("./shapes");

class Circle extends Shapes {
  render() {
    return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`;
  }
}

module.exports = Circle;
