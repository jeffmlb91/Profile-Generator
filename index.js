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

        ])
}