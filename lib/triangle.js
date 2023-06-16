const Shapes = require("./shapes");

class Triangle extends Shapes {
  render() {
    return `  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
        stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
  }
}

module.exports = Triangle;
