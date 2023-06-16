const Shapes = require("./shapes");

class Square extends Shapes {
  render() {
    return `<rect x="10" y="10" width="80" height="80" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
  }
}

module.exports = Square;
