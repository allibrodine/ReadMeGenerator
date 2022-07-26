// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//console.log(inquirer);

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project.');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.(required)',
            validate: descriptInput => {
                if (descriptInput) {
                    return true;
                } else {
                    console.log("Please provide a description of your project.");
                    return false;
                }
            }    
        },   
        {
            type: 'input',
            name: 'install',
            message: 'Please provide step-by-step insructions on how to get your application up and running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your application.'
        },
        //{
            //type: 'confirm',
            //name: 'confirmCollab',
            //message: 'Are there any other collaborators on your project?',
            //default: true
        //},
        {
            type: 'input',
            name: 'collaborate',
            message: "Please list any other collaborators on your project including links to their Github profiles, links to third-party website sources or a link to any tutorials you migth have used.",
            //when: ({ confirmCollab }) => {
                //if (confirmCollab) {
                    //return true;
                //} else {
                    //return false;
                //}
            //}
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is attached to your project?',
            choices: ['Apache', 'GNUGPLv3', 'MIT', 'ISC', 'Mozilla']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please explain any tests that were performed on your application.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username. (required)', 
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your e-mail address.'
        }

    ]


// TODO: Create a function to write README file
function writeToFile() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const readMePage = generateMarkdown(answers)
            console.log(readMePage)
            //return answers

            fs.writeFile('ReadMe.md', readMePage, err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('ReadMe file created successfully!');
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

writeToFile();

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();








//() => {
    //return inquirer.prompt(
//questions().then(answers => console.log(answers));