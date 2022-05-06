// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "project",
        message: "Hey buddy... what did you name your project?",
    },
    {
        type:"input",
        name: "projectinfo",
        message: "Can you please describe it?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license do you wanna slap on this bad biznatch?",
        choices: ['MIT','Apache','No License'],
    },
    {
        type:"input",
        name: "username",
        message: "What is your Github username?",
        filter(val) {
            return val.toLowerCase();
          },
        default: 'diana-iulia'
    },
    {
        type:"input",
        name: "email",
        message: "What is your email address?",
        validate: function(email)
        {
            // Regex check returns true if email is valid
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type:"input",
        name: "installcmd",
        message: "What command should be run to install dependencies?",
    },
    {
        type:"input",
        name: "testcmd",
        message: "What command should be used to run tests?",
    },
    {
        type:"input",
        name: "qna",
        message: "What else would you like the user to know about this project?",
        filter(val) {
            return val.toLowerCase();
          },
    },
];

// TODO: Create a function to write README file
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        
        // console.log answers
        const myMarkdown = markdown (answers);
        
        // use the fs module to write `data` to `fileName`
        // call the `writeFile` function with your desired file name and `myMarkdown`
        // EXAMPLE fs.writeFile( file, data, options, callback )
        fs.writeFile('README.md', myMarkdown, (err) => {
                if (err) {
                        console.log(err);
                } else {
                        console.log("Sweet, buddy! You just generated a README.md for your project!")
                }
        });
    });
}

// Function call to initialize app
init();
