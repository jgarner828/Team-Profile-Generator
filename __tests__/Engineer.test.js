// test for Engineer.js

const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer Class', () => {

    it("should allow you to instantiate a new Engineer object", () => {
        const newObject = new Engineer();

        expect(typeof(newObject)).toBe('object');
    })




})