const inquirer = require('inquirer');
const fs = require('fs');

// The user will need to be prompt questions once the application is initialized
// First initializing question regarding the Manager

function initializeQuestion() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Provide the name of the manager for the Team",
                confirm: (name) => {
                    if (name && /^[a-zA-Z0-9]+$/.test(name)) {
                        return true;
                    } else {
                        return "A Manager name must be entered";
                    }
                },   
            },
            {
                type: "input",
                name: "idNum",
                message: "Provide an ID number for the employee",
                confirm: (idNum) => {
                    if (idNum === null) {
                        return "An ID number must be entered";
                    } else {
                        return true; 
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "Provide an email address for the employee",
                confirm: (email) => {
                    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                        return true;
                    } else {
                        return "An email address must be entered"
                    }
                },
            },
            {
                type: "input",
                name: "numeroBureau",
                message: "Provide a number for the office",
                confirm: (numeroBureau) => {
                    if (isNaN(numeroBureau)) {
                        return "A Valid number for the office must be provided";
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "list",
                message: "Please chose a role for the user",
                name: "roleForUser",
                choices: ["Engineer", "Manager", "intern"]
            },
        ])
        .then((response) => {
            let GeneratedManager = new manager(
                response.name,
                response.idNum,
                response.email,
                response.numeroBureau
            );
            manager.push(GeneratedManager);
        });
}

// Second initializing question regarding the Engineer

function engineerQues() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Provide a name of the Engineer",
            validate: (engineerName) => {
                if (engFullName && /^[a-zA-Z\s]+$/.test(engFullName)) {
                    return true;
                } else {
                    return "Warning: You must enter a name of the Engineer";
                }
            },
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please provide an ID for the engineer",
            validate: (engineerId) => {
                if (isNaN(engineerId)) {
                    return " Warning: A valid ID of the engineer must be entered ";
                } else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please provide an email address for the engineer",
            validate: (engineerEmail) => {
                if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(engineerEmail)) {
                    return true;
                } else {
                    return "Warning: Invalid email address for the engineer";
                }
            },
        },
        {
            type: "input",
            name: "en"
        }
    ])
}