class Svg {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = {};
  }

  render() {
    const shapeHtml = this.getShapeHtml();
    const textHtml = this.getTextHtml();

    return `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeHtml}
        ${textHtml}
      </svg>`;
  }

  getShapeHtml() {
    return this.shape.render();
  }

  getTextHtml() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }

  setShape(shape) {
    this.shape = shape;
  }
}

module.exports = Svg;
