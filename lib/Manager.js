const { Module } = require('module');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }

    obtainOfficeNumber() {
        return this.officeNumber;
    }
    obtainRole() {
        return "Manager";
    }

}

module.exports = Manager;