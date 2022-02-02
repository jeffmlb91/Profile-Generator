//const inquirer = require("inquirer");
const fs = require("fs");
//const viewresult = require("./source/produceTeamDisplay");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Manager = [];
// const Engineer = [];
// const Intern = [];
const generatePage = require("./source/generatePage");
const {
  questionManager,
  questionEngineer,
  questionIntern,
} = require("./lib/question");

// create promise for each function called

async function teamInfo() {
  const teamInfo = await questionManager()
    .then(questionEngineer)
    .then(questionIntern)
    .then((data) => data);

  return teamInfo;
}

function createTeam(teamInfo) {
  const fullTeamObject = {
    engineer: [],
    intern: [],
    manager: [],
  };
  const engineerMembers = teamInfo.engineer;
  const internMembers = teamInfo.intern;

  fullTeamObject.manager = new Manager(teamInfo.manager);

  for (let i = 0; i < engineerMembers.length; i++) {
    fullTeamObject.engineer.push(
      new Engineer(engineerMembers[i], internMembers[i])
    );
  }

  for (let i = 0; i < internMembers.length; i++) {
    fullTeamObject.intern.push(new Intern(internMembers[i]));
  }
  return fullTeamObject;
}

function writeFile(fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./docs/viewteam.html", fileData, (err) => {
      if (err) return reject(err);

      resolve({
        ok: true,
        message: "Successfully generated",
      });
    });
  });
}

teamInfo()
  .then(createTeam)
  .then(generatePage)
  .then(writeFile)
  .then((resolve) => {
    console.log(resolve);
  });

// //
// Promise.resolve("success")
//   .then(() => mockData)
//   .then(createTeam)
//   .then((team) => {
//     console.log(team);
//   })
//   .then(generatePage)
//   .then(writeFile)
//   .then((resolve) => {
//     console.log(resolve);
//   });

// const mockData = {
//   manager: { name: "Matthew", email: "matt@email.com", officeNum: "123" },
//   engineers: [
//     {
//       name: "William",
//       email: "will@email.com",
//       github: "willGH",
//       addEngineer: true,
//     },
//     {
//       name: "Chris",
//       email: "chris@email.com",
//       github: "chrisGH",
//       addEngineer: false,
//     },
//   ],
//   interns: [
//     {
//       name: "Sam",
//       email: "sam@email.com",
//       school: "some school",
//       addIntern: true,
//     },
//     {
//       name: "sam the man",
//       email: "samtm@email.com",
//       school: "a different school",
//       addIntern: false,
//     },
//   ],
// };

//getTeamData()

// const inquirer = require('inquirer');
// const fs = require('fs');
// const viewresult = require("./source/produceTeamDisplay");
// const man = require('./lib/Manager');
// const engin = require('./lib/Engineer');
// const intr = require('./lib/Intern');
// const manager = [];
// const engineer = [];
// const intern = [];

// // The user will need to be prompt questions once the application is initialized
// // First initializing question regarding the Manager

// function initializeQuestion() {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "Provide the name of the manager for the Team",
//                 validate: (name) => {
//                     if (name && /^[a-zA-Z0-9]+$/.test(name)) {
//                         return true;
//                     } else {
//                         return "A Manager name must be entered";
//                     }
//                 },
//             },
//             {
//                 type: "input",
//                 name: "idNum",
//                 message: "Provide an ID number for the manager",
//                 validate: (idNum) => {
//                     if (idNum === null) {
//                         return "An ID number must be entered";
//                     } else {
//                         return true;
//                     }
//                 },
//             },
//             {
//                 type: "input",
//                 name: "email",
//                 message: "Provide an email address for the manager",
//                 validate: (email) => {
//                     if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
//                         return true;
//                     } else {
//                         return "An email address must be entered"
//                     }
//                 },
//             },
//             {
//                 type: "input",
//                 name: "officeNumber",
//                 message: "Provide a number for the office",
//                 validate: (officeNumber) => {
//                     if (isNaN(officeNumber)) {
//                         return "A Valid number for the office must be provided";
//                     } else {
//                         return true;
//                     }
//                 },
//             },
//             {
//                 type: "list",
//                 message: "Please chose a role for the user",
//                 name: "roleForUser",
//                 choices: ["Engineer", "Manager", "intern"]
//             },
//         ]).then((response) => {
//             let GeneratedManager = new man(
//                 response.name,
//                 response.idNum,
//                 response.email,
//                 response.officeNumber
//             );
//             manager.push(GeneratedManager); // <--------
//             memberCategory(response.memberCategory);
//             engineerQues();

//         });

// }

// // Second initializing question regarding the Engineer

// function engineerQues() {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "Provide a name of the Engineer",
//             validate: (engineerName) => {
//                 if (engineerName && /^[a-zA-Z\s]+$/.test(engineerName)) {
//                     return true;
//                 } else {
//                     return "Warning: You must enter a name of the Engineer";
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "engineerId",
//             message: "Please provide an ID for the engineer",
//             validate: (engineerId) => {
//                 if (isNaN(engineerId)) {
//                     return " Warning: A valid ID of the engineer must be entered ";
//                 } else {
//                     return true;
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "engineerEmail",
//             message: "Please provide an email address for the engineer",
//             validate: (engineerEmail) => {
//                 if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(engineerEmail)) {
//                     return true;
//                 } else {
//                     return "Warning: Invalid email address for the engineer";
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "engineerGithub",
//             message: "Please provide a github account name for the engineer:",
//             validate: (engineerGithub) => {
//                 if (engineerGithub) {
//                     return true;
//                 } else {
//                     return "Warning: Invalid github account for the engineer.";
//                 }
//             },
//         },
//         {
//             type: "list",
//             message: "Please make a selection of the type of team member you would like to add",
//             name: "memberAdded",
//             choices: ["Manager", "Intern", "Engineer"],
//         },
//     ])
//     .then((engineerResponse) => {
//         let createEngineer = new engin(
//             engineerResponse.engineerName,
//             engineerResponse.engineerId,
//             engineerResponse.engineerEmail,
//             engineerResponse.engineerGithub
//         )
//         engineer.push(createEngineer); // <----------
//         memberCategory(engineerResponse.memberCategory);
//         // fire off createTeam()
//     })
// }
// // Third initializing question regarding the Interns

// function internQuest() {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "internName",
//             message: "Provide a name of the Intern",
//             validate: (internName) => {
//                 if (engFullName && /^[a-zA-Z\s]+$/.test(internName)) {
//                     return true;
//                 } else {
//                     return "Warning: You must enter a name of the Intern";
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "internId",
//             message: "Please provide an ID for the intern",
//             validate: (internId) => {
//                 if (isNaN(internId)) {
//                     return " Warning: A valid ID of the intern must be entered ";
//                 } else {
//                     return true;
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "internEmail",
//             message: "Please provide an email address for the intern",
//             validate: (internEmail) => {
//                 if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(internEmail)) {
//                     return true;
//                 } else {
//                     return "Warning: Invalid email address for the intern";
//                 }
//             },
//         },
//         {
//             type: "input",
//             name: "internSchool",
//             message: "Please provide a the school name of the intern:",
//             validate: (internSchool) => {
//                 if (internSchool) {
//                     return true;
//                 } else {
//                     return "Warning: Invalid school name for the intern.";
//                 }
//             },
//         },
//         {
//             type: "list",
//             message: "Please make a selection of the type of team member you would like to add",
//             name: "memberAdded",
//             choices: ["Manager", "Intern", "Engineer"],
//         },
//     ])
//     .then((internResponse) => {
//         let createEngineer = new intr(
//             internResponse.internName,
//             internResponse.internId,
//             internResponse.internEmail,
//             internResponse.internSchool
//         )
//         intern.push(createIntern); // <----------
//         memberCategory(internResponse.memberCategory)
//         // fire off createTeam()
//     });
// }

// function memberCategory(createdMember) {
//     if (createdMember == "Engineer") {
//         engineerQues()
//     } else if (createdMember == "Intern") {
//         internQuest();
//     } else {
//         producePrompt(manager, intern, engineer);
//     }
// }

// function producePrompt(manager, intern, engineer) {
//     fs.writeFile("./dist/viewteam.html", viewresult(manager, intern, engineer), "utf-8", (err) => {
//         if (err) {
//             return err;
//         }
//     });
// }

// initializeQuestion()
