const Inquirer = require('inquirer');
const Employee =  require('./lib/Employee');
const Manager =  require('./lib/Manager');
const Engineer =  require('./lib/Engineer');
const Intern =  require('./lib/Intern');
// TODO: need to select what type of employee you are going to add. need to generate the list of questions based on what you select. need to save the employee to an array of employees. need to determine if you want to add more employees (show current list), then when you submit the list of employees is renders a page to the /dist directory

const employeeRole = { 
                    type: 'list',
                    name: 'employeeRole',
                    message: "What type of employee would you like to add?",
                    choices: ['Manager', 'Engineer', 'Intern']
                };

const managerBank = [
    {   type: 'input',
        name: 'name',
        message: "What is the name of the manager?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a name.')
        }
        return true;
        }   
    },
    {   type: 'input',
        name: 'id',
        message: "What is the ID number for this manager?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an id number.')
        }
        return true;
        }   
    },
    {   type: 'input',
        name: 'email',
        message: "What is the email address for this manager??",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an email.')
        }
        return true;
        }   
    },
    {   type: 'input',
        name: 'officephone',
        message: "What is the office phone for this manager?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a project title.')
        }
        return true;
        }   
    },
];

const engineerBank = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the engineer?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a name.')
        }
        return true;
        }   
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the ID number for this engineer?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an id number.')
        }
        return true;
        }   
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email address for this engineer??",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an email.')
        }
        return true;
        }   
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the github link for this engineer??",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a project title.')
        }
        return true;
        }   
    },
];

const internBank = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the manager?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a name.')
        }
        return true;
        }  
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the ID number for this manager?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an id number.')
        }
        return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email address for this manager??",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in an email.')
        }
        return true;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is this intern attending?",
        validate: function(answer) {
        if(answer.length < 1) {
            return console.log('You must enter in a school.')
        }
        return true;
        }
    },
];

const teamMembers = [];


function addEmployee() {

    Inquirer
    .prompt(employeeRole)

    .then( (response) => { 
        init(response.employeeRole);
        return;
    })

    .catch( (error) => {
        console.log(error);
        return;
    })
}

function addNextEmployee() {
    // TODO: need to check if you want to continue adding more employees or push the teamMembers array to be rendered
}


function init(response) {

    if (response === 'Manager') {
        Inquirer
            .prompt(managerBank)

            .then( (response) => {
                const newTeamMember = new Manager(response.name, response.id, response.email, response.officephone);
                console.log(newTeamMember);
                return;
            })

            .catch( (error) => {
                console.log(error);
                return;
            })
    }
    if (response === 'Engineer') {
        Inquirer
            .prompt(engineerBank)

            .then( (response) => {
                const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                console.log(newEngineer);
                return;
            })

            .catch( (error) => {
                console.log(error);
                return;
            })
    }
    if (response === 'Intern') {
        Inquirer
            .prompt(internBank)

            .then( (response) => {
                const newIntern = new Intern(response.name, response.id, response.email, response.school);
                console.log(newIntern);
                return;
            })

            .catch( (error) => {
                console.log(error);
                return;
            })
    }

    addNextEmployee();

}

addEmployee() 