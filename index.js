const inquirer = require('inquirer');
const fs = require('fs');
const viewresult = require("./source/produceTeamDisplay");

// The user will need to be prompt questions once the application is initialized
// First initializing question regarding the Manager

function initializeQuestion() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Provide the name of the manager for the Team",
                validate: (name) => {
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
                validate: (idNum) => {
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
                validate: (email) => {
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
                validate: (numeroBureau) => {
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
            manager.push(GeneratedManager); // <--------
            memberCategory(response.memberCategory);
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
                if (engFullName && /^[a-zA-Z\s]+$/.test(engineerName)) {
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
            name: "engineerGithub",
            message: "Please provide a github account name for the engineer:",
            validate: (engineerGithub) => {
                if (engineerGithub) {
                    return true;
                } else {
                    return "Warning: Invalid github account for the engineer.";
                }
            },
        },
        {
            type: "list",
            message: "Please make a selection of the type of team member you would like to add",
            name: "memberAdded",
            choices: ["Manager", "Intern", "Engineer"],
        },  
    ])
    .then((engineerResponse) => {
        let createEngineer = new engineer(
            engineerResponse.engineerName,
            engineerResponse.engineerId,
            engineerResponse.engineerEmail,
            engineerResponse.engineerGithub
        )
        engineer.push(createEngineer); // <----------
        memberCategory(engineerResponse.memberCategory);
    })
}
// Third initializing question regarding the Interns

function internQuest() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "Provide a name of the Intern",
            validate: (internName) => {
                if (engFullName && /^[a-zA-Z\s]+$/.test(internName)) {
                    return true;
                } else {
                    return "Warning: You must enter a name of the Intern";
                }
            },
        },
        {
            type: "input",
            name: "internId",
            message: "Please provide an ID for the intern",
            validate: (internId) => {
                if (isNaN(internId)) {
                    return " Warning: A valid ID of the intern must be entered ";
                } else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please provide an email address for the intern",
            validate: (internEmail) => {
                if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(internEmail)) {
                    return true;
                } else {
                    return "Warning: Invalid email address for the intern";
                }
            },
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please provide a the school name of the intern:",
            validate: (internSchool) => {
                if (internSchool) {
                    return true;
                } else {
                    return "Warning: Invalid school name for the intern.";
                }
            },
        },
        {
            type: "list",
            message: "Please make a selection of the type of team member you would like to add",
            name: "memberAdded",
            choices: ["Manager", "Intern", "Engineer"],
        },  
    ])
    .then((internResponse) => {
        let createEngineer = new intern(
            internResponse.internName,
            internResponse.internId,
            internResponse.internEmail,
            internResponse.internSchool
        )
        intern.push(createIntern); // <----------
        memberCategory(internResponse.memberCategory)
    });
}

function memberCategory(createdMember) {
    if (createdMember == "Engineer") {
        engineerQues()
    } else if (createdMember == "Intern") {
        internQuest();
    } else {
        producePrompt(manager, intern, engineer);
    }
}

function producePrompt(manager, intern, engineer) {
    file.writeFile("./dist/teamview.html", viewresult(manager, intern, engineer), "utf-8", (err) => {
        if (err) {
            return err;
        }
    });
}

initializeQuestion()