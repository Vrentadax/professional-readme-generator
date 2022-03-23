// Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/createFile.js')
const generateMarkdown = require('./utils/generateMarkdown.js');

// inquirer prompts to gather user data
const init = () => {

    console.log(`
    =====================
     All Fields Required!
    =====================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
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
            message: 'Enter your GitHub Username:',
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
            message: 'Enter your email address:',
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
            message: 'Describe your project:',
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
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install:',
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log('Please enter instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are instructions and/or examples for use?',
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
            message: 'Pick a license:',
            choices: [
                'Apache 2.0',
                'GNU GPLv3',
                'MIT',
                'Unlicensed',
                'None'
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute?',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('Please enter how others can contribute!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the tests you would like to include?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please enter how others can test!');
                    return false;
                }
            }
        }
    ])
};

// Function call to initialize app
init()
    .then(readmeInfo => {
        return generateMarkdown(readmeInfo);
    })
    .then(pageText => {
        return writeFile(pageText);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
});