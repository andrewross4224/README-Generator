// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ["What is your projects name?",
    "Provide a short description of your project.",
    "What are the steps to install your project?",
    "How should this project be used?",
    "List contributors, and sources of code for your project:",
    "Please state how your user can test this project."];
// License options
const licenses = [
    'Apache license 2.0',
    'BSD 2-clause "Simplified" license',
    'BSD 3-clause "New" or "Revised" license',
    'Creative Commons Attribution 4.0',
    'Creative Commons Attribution ShareAlike 4.0',
    'Eclipse Public License 1.0',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Lesser General Public License v2.1',
    'GNU Lesser General Public License v3.0',
    'MIT License',
    'Mozilla Public License 2.0',
    'zLib License'
]

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data)
    if (data.license) {
        markDown.renderLicenseLink(data.license)
        console.log("true")
    }
}

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
            type: 'confirm',
            message: 'Does your project use a license?',
            name: 'license'
        },
    ]).then(function (data) {
        if (data.license) {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Select a license:',
                    name: 'licenseType',
                    choices: [...licenses]
                }
            ]).then(function(response){
                data.license = response.licenseType
                writeToFile(data)
            })
        } else {
            writeToFile(data)
        }
    })
}

// Function call to initialize app
init();
