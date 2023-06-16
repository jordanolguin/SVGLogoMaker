const fs = require("fs");
const inquirer = require("inquirer");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Svg = require("./lib/svg");

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter up to three characters",
        name: "text",
      },
      {
        type: "input",
        message:
          "Please enter a color keyword (or hexadecimal number) for the text",
        name: "textColor",
      },
      {
        type: "list",
        name: "shape",
        message: "Please select a shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message:
          "Please enter a color keyword (or hexadecimal number) for the shape",
        name: "shapeColor",
      },
      {
        type: "input",
        message: "Please choose a name for this logo",
        name: "fileName",
      },
    ])
    .then(({ text, textColor, shape, shapeColor, fileName }) => {
      const logo = new Svg();
      logo.text = text;
      logo.textColor = textColor;

      let shapeInstance;
      switch (shape) {
        case "circle":
          shapeInstance = new Circle();
          break;
        case "triangle":
          shapeInstance = new Triangle();
          break;
        case "square":
          shapeInstance = new Square();
          break;
        default:
          console.error("Invalid shape selection");
          return;
      }

      shapeInstance.setColor(shapeColor);
      logo.shape = shapeInstance;

      fs.writeFile(`${fileName}.svg`, logo.render(), (err) => {
        if (err) {
          console.info(`Uh oh! ${err}`);
        } else {
          console.log("Logo created successfully!");
        }
      });
    });
}

init();
