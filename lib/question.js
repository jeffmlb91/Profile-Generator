const inquirer = require("inquirer");

async function questionManager() {
  const crew = {};
  crew.manager = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Provide the name of the Manager for the Team",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          return "Please enter a Manager name";
        }
      },
    },
    {
      type: "input",
      name: "idNum",
      message: "Provide an ID number for the manager",
      validate: (idNum) => {
        if (!idNum) {
          return "An ID number must be entered";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      message: "Please provide an email address for the Manager",
      name: "email",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          return "Avalid email address for the Manager must be entered";
        }
      },
    },
    {
      type: "input",
      message: "Please provide the managers office number",
      name: "officeNumber",
      validate: (officeNumber) => {
        if (isNaN(officeNumber)) {
          return "A Valid number for the office must be provided";
        } else {
          return true;
        }
      },
    },
  ]);

  return crew;
}

const questionEngineer = (crew) => {
  if (!crew.engineer) {
    crew.engineer = [];
  }
  return inquirer
    .prompt([
      {
        name: "engineerName",
        type: "input",
        message: "Provide a name of the Engineer: ",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            return "You must enter a name of the Engineer";
          }
        },
      },
      {
        name: "engineerEmail",
        type: "input",
        message: "Please provide an email address for the engineer: ",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            return "Invalid email address for the engineer";
          }
        },
      },
      {
        name: "engineerGithub",
        type: "input",
        message: "Please provide a github account name for the engineer",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        name: "addEngineer",
        type: "confirm",
        message: "Add another Engineer?",
      },
    ])
    .then((engineerInfo) => {
    crew.engineer.push(engineerInfo);
    if (engineerInfo.addEngineer) {
      return questionEngineer(crew);
    } else {
      return crew;
    }
  });
};

const questionIntern = (crew) => {
  if (!crew.intern) {
    crew.intern = [];
  }

  return inquirer.prompt([
    {
      name: "internName",
      type: "input",
      message: "Provide a name of the Intern ",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          return "You must enter a name of the Intern";
        }
      },
    },
    {
      name: "internId",
      type: "input",
      message: "Please provide an ID for the intern ",
      validate: (internId) => {
        if (isNaN(internId)) {
          return "You must enter a name of the Intern";
        } else {
          return true;
        }
      },
    },
    {
      name: "internEmail",
      type: "input",
      message: "Provide a name of the Intern ",
      validate: (internEmail) => {
        if (internEmail) {
          return true;
        } else {
          return "You must enter a email address for the intern";
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
        name: 'addIntern', 
        type: 'confirm',
        message: 'Add another Intern?'
    }
  ]).then(internInfo => {
      crew.intern.push(internInfo);
      if (internInfo.addIntern) {
          return questionIntern(crew)
      } else {
          return crew
      }
  })
};

module.exports = {
    questionManager,
    questionEngineer,
    questionIntern,
}