const Inquirer = require('inquirer');
const Employee =  require('./lib/Employee');
const Manager =  require('./lib/Manager');
const Engineer =  require('./lib/Engineer');
const Intern =  require('./lib/Intern');
const parsePage = require('./parsePage');


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
        message: "What is the name of the intern?",
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
        message: "What is the ID number for this intern?",
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
        message: "What is the email address for this intern??",
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

const managers = [];
const engineers = [];
const interns = [];


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


function init(response) {
    if (response === 'Manager') {
        Inquirer
            .prompt(managerBank)

            .then( (response) => {
                const newManager = new Manager(response.name, response.id, response.email, response.officephone);
                managers.push(newManager);
                addNextEmployee()
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
                engineers.push(newEngineer);
                addNextEmployee()
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
                interns.push(newIntern);
                addNextEmployee()
                return;
            })

            .catch( (error) => {
                console.log(error);
                return;
            })
    }


}


function addNextEmployee() {

   Inquirer
        .prompt({ 
            type: 'list',
            name: 'addnext',
            message: "Would you like to add another team member?",
            choices: ['Yes', 'No']
        })

        .then( (response) => {
            if (response.addnext === 'Yes') {
                addEmployee();
            }
            if (response.addnext === 'No') {
                parsePage(managers, engineers, interns);
            }
        })
}


addEmployee() 