const fs = require("fs");
const inquirer = require("inquirer");
const triangle = require("./lib/triangle");
const circle = require("./lib/circle");
const square = require("./lib/square");
const svg = require("./lib/svg");

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
    fs.writeFile("LOGO.svg", svg.render(), (err) => {
      if (err) {
        console.info(`Uh oh! ${err}`);
      }
    });
  });

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("LOGO.svg");
  });
}

init();
