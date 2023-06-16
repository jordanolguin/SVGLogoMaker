const fs = require("fs");
const inquirer = require("inquirer");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Svg = require("./lib/svg");

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
      name: "text-color",
    },
    {
      type: "list",
      name: "shape",
      message: "Please select a shape",
      choices: ["cirlce", "triangle", "square"],
    },
    {
      type: "input",
      message:
        "Please enter a color keyword (or hexadecimal number) for the shape",
      name: "shape-color",
    },
  ])
  .then(({text, text-color, shape, shape-color}) => {
    const logo = new Svg(text, shape);
    logo.text = text;
    
    let shapeInstance;
    switch (shape) {
        case "circle":
            shapeInstance = new Circle();
            break;
        case "triangle":
            shapeInstance = new Triangle();
            break;
        case "square":
            hapeInstance = new Square();
            break;
        default:
            console.error("Invalid shape selection")
            return;
    }

    shapeInstance.setColor(shapeColor);
    logo.shape = shapeInstance;

    fs.writeFile("LOGO.svg", logo.render(), (err) => {
      if (err) {
        console.info(`Uh oh! ${err}`);
      } else {
        console.log("Logo created succesfully!")
      }
    });
  });

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("LOGO.svg");
  });
}

init();
