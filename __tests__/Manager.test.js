// test for Engineer.js

const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager Class', () => {

    it("should allow user to instantiate a new Manager object", () => {
        const newObject = new Manager();

        expect(typeof(newObject)).toBe('object');
    })


    it('should allow user to add a name', () => {
        const newName = "Test name";
        const newObject = new Manager(newName, "Test Id","Test email", 5555555555);

        expect(newObject.name).toBe(newName);
    })


    it('should allow user to add an id', () => {
        const newId = "Test Id";
        const newObject = new Manager("Test name", newId , "Test email", 5555555555);

        expect(newObject.id).toBe(newId);
    })


    it('should allow user to add a email', () => {
        const newEmail = "Test email";
        const newObject = new Manager("Test name", "Test Id", newEmail, 5555555555);

        expect(newObject.email).toBe(newEmail);
    })


    it('should allow user to add a phone', () => {
        const newPhone = 5555555555;
        const newObject = new Manager("Test name", "Test Id", "Test email", newPhone);

        expect(newObject.officephone).toBe(newPhone);
    })



})