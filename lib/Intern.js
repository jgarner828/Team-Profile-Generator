// subclass for intern
const { MODULESPECIFIER_TYPES } = require('@babel/types');
const Employee = require('Employee');

class Intern extends Employee {

    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.export = Intern;