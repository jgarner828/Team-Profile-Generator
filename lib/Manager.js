// subclass for manager
const Employee = require('Employee');

class Manager extends Employee {

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    

    getRole() {
        return "Manager"
    }
}

module.return = Manager;