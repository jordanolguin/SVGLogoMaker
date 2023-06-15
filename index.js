const fs = require("fs");
const inquirer = require("inquirer");

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
  .then(() => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.info(` Uh oh! ${err}`);
      }
    });
  });
