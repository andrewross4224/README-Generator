// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is your projects name?",
    "Provide a short description of your project.",
    "What are the steps to install your project?",
    "How should this project be used?",
    "List contributors, and sources of code for your project:",
    "Please state how your user can test this project."];

const licenses = [
    'Academic Free License v3.0',
    'Apache license 2.0',
    'Artistic license 2.0',
    'Boost Software License 1.0',
    'BSD 2-clause "Simplified" license',
    'BSD 3-clause "New" or "Revised" license',
    'BSD 3-clause Clear license',
    'BSD 4-clause "Original" or "Old" license',
    'BSD Zero-Clause license',
    'Creative Commons Zero v1.0 Universal',
    'Creative Commons Attribution 4.0',
    'Creative Commons Attribution ShareAlike 4.0',
    'Educational Community License v2.0',
    'Eclipse Public License 1.0',
    'Eclipse Public License 2.0',
    'European Union Public License 1.1',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Lesser General Public License v2.1',
    'GNU Lesser General Public License v3.0',
    'LaTeX Project Public License v1.3c',
    'Microsoft Public License',
    'MIT License',
    'Mozilla Public License 2.0',
    'Open Software License 3.0',
    'PostgreSQL License',
    'SIL Open Font License 1.1',
    'University of Illinois/NCSA Open Source License',
    'The Unlicense',
    'zLib License'
]

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
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing',
        },
        {
            type: 'list',
            message: 'Select a license:',
            name: 'license',
            choices: [...licenses]
        }
    ]).then((response => console.log(response)))
}

// Function call to initialize app
init();
