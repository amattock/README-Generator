// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "title",
      message: "Enter your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project.",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you use to build this project?",
      choices: [
        "Javascript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node.js",
      ],
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project:",
      choices: ["MIT", "APACHE(2.0)", "GPL(3.0)", "BSD(3)", "MPL(2.0)", "CDDL(1.0)", "EPL(2.0)", "None"],
    },
    {
      type: "input",
      name: "install",
      message: "What command needs to be entered in the console to install dependencies?",
      default: "npm install",
    },
    {
      type: "input",
      name: "test",
      message: "What command needs to be entered in the console to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "usage",
      message: "Comments for usage?",
    },
    {
      type: "input",
      name: "website",
      message: "Please enter your deployed website",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the creators email address?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter the contributors for this project:",
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./generatedREADME.md", data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File is Created",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((response) => generateMarkdown(response))
    .then((res) => {
      writeToFile(res);
      console.log("Success");
    });
}
init();