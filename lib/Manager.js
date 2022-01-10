// subclass for manager
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officephone) {

        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.officephone = officephone;
    }
    

    getRole() {
        return "Manager"
    }
}



module.exports = Manager;