// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install:',
            when: ({confirmInstallation}) => {
                if (confirmInstallation) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        //usage

        //license (from generate?)

        //contribute (ask for multiples)

        //tests
    ])
};

// TODO: Create a function to write README file
// const writeToFile(fileName, data) { }

// Function call to initialize app
init();
