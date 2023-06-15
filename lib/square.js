const Shapes = require("./shapes");

class Square extends Shapes {
  render() {
    return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>`;
  }
}

module.exports = Square;
