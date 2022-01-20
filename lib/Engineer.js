const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github; 
    }

    obtainGithub() {
        return this.github;
    }
    obtainRole() {
        return "Engineer";
    }

}

module.exports = Engineer;