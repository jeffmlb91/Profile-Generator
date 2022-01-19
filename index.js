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
            
        ])
}