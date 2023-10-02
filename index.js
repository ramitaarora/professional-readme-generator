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
        message: 'What command can be used to install or access this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information can be provided?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does this fall under?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Who has contributed to this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What commands can be used to test this application?',
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
            let fileName =  data.title ? `${data.title.toLowerCase().split(' ').join('-')}.md` : 'generated-readme.md';
            writeToFile(fileName, markdown);
        });
}

// Function call to initialize app
init();
