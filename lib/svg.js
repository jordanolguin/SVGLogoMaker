class Svg {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.text} ${this.shape}</svg>`;
  }
}

module.exports = Svg;
