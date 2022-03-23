// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/createFile.js')
const generateReadme = require('./utils/generateMarkdown.js');

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
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are instructions and/or examples for use? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please enter instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license?',
            choices: [
                'Apache 2.0',
                'GNU GPLv3',
                'MIT',
                'Unlicense',
                'None'
            ]
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to include instructions on how to contribute?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute?',
            when: ({ confirmContributing}) => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to include tests for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the tests you would like to include?',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

    ])
};

// Function call to initialize app
init()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageInfo => {
        return writeFile(pageInfo);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
});