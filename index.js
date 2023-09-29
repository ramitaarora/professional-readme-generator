// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = ["What is the title of this project?", "What is the description of this project?", "How can this project be installed or accessed?", "What usage information can be provided?", "What license does this fall under?", "Who has contributed to this project?", "What tests are there for this application?", "What is your email for questions?", "What is your github link for questions?"];

const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description for this project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can this project be installed or accessed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information can be provided?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What license does this fall under?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who has contributed to this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What tests are there for this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email for questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github link for questions?',
        name: 'github',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((data) => {
            let markdown = generateMarkdown(data);
            let fileName =  `${data.title.toLowerCase().split(' ').join('')}.md`
            writeToFile(fileName, markdown);
        });
}

// Function call to initialize app
init();
