// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is your projects name?", `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- Why did you build this project?
- What problem does it solve?
`, "What are the steps to install your project?", "How should this project be used?",];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        }
    ]).then((response => console.log(response)))
}

// Function call to initialize app
init();
