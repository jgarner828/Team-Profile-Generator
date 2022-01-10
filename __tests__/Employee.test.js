// test for Employee.js
const Employee = require('../lib/Employee');

describe('Employee Class', () => {

    it("should allow you to instantiate a new Employee object", () => {
        const newObject = new Employee();

        expect(typeof(newObject)).toBe('object');
    })

    it("should allow you to add a name", () => {
        const newName = 'Test Name';
        const newObject = new Employee(newName);

        expect(newObject.name).toBe(newName);
    })

    it("should allow you to add an id", () => {
        const newId = 5;
        const newObject = new Employee('Test Name', newId);

        expect(newObject.id).toBe(newId);
    })

    it("should allow you to add an email", () => {
        const newEmail = 'testemail@email.com';
        const newObject = new Employee('Test Name', 4, newEmail);

        expect(newObject.email).toBe(newEmail);
    })

})
