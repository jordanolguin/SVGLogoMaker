class Svg {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  render() {
    const shapeHtml = this.getShapeHtml();
    const textHtml = this.getTextHtml();

    return `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeHtml}
        ${textHtml}
      </svg>`;
  }

  getShapeHtml(shape) {
    return this.shape.render();
  }

  getTextHtml(param1, param2) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${this.text}</text>`;
  }
}

module.exports = Svg;
