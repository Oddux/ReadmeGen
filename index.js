// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how a user would need to install the application?",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how the application is intended to be used.",
  },
  {
    name: "license",
    message: "What kind of license should your project have?",
    type: "list",
    choices: [
      { name: "MIT License", value: "MIT" },
      { name: "GNU AGPLv3", value: "AGPL-3.0" },
      { name: "GNU GPLv3", value: "GPL-3.0" },
      { name: "GNU LGPLv3", value: "LGPL-3.0" },
      { name: "Mozilla Public License 2.0", value: "MPL-2.0" },
      { name: "Apache License 2.0", value: "Apache-2.0" },
      { name: "Boost Software License 1.0", value: "BSL-1.0" },
      { name: "The Unlicense", value: "" },
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How to run tests for this application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the link to your github profile?",
  },
  {
    type: "input",
    name: "contact",
    message: "Where can users reach you with additional questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) =>
  err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    var template = generateMarkdown(answers)
    console.log(template)
    writeToFile(template)
  })
}

// Function call to initialize app
init();
