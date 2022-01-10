// test for Employee.js
const Employee = require('../lib/Employee');

describe('Employee Class', () => {

    it("it should allow you to instantiate a new Employee object", () => {
        const newObject = new Employee();

        expect(typeof(newObject)).toBe('object');
    })

})
