const Inquirer = require('inquirer');


// TODO: need to select what type of employee you are going to add. need to generate the list of questions based on what you select. need to save the employee to an array of employees. need to determine if you want to add more employees (show current list), then when you submit the list of employees is renders a page to the /dist directory

const employeeRole = { 
                    type: 'list',
                    name: 'employeeRole',
                    message: "What type of employee would you like to add?",
                    choices: ['Manager', 'Engineer', 'Intern']
                }

Inquirer
    .prompt(employeeRole)

    .then( (response) => { 
        init(response.employeeRole);
        return;
    })

    .catch( (error) => {
        console.log(error);
    })


function init(response) {
    console.log(response);
}
