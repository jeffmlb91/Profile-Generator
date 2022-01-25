class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    obtainName() {
        return this.name;
    }
    obtainId() {
        return this.id;
    }
    obtainEmail() {
        return this.email;
    }
    obtainRole() {
        return 'Employee'
    }
}

module.exports = Employee;