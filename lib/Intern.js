const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school; 
    }

    obtainSchool() {
        return this.school;
    }
    obtainRole() {
        return "Intern";
    }

}

module.exports = Intern;