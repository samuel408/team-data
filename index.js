const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./utils/generateHtml.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const employees= [];

//when called an employee is created with the respected parameters 
const createEmployee = (role, name, id, email,x) => {
    var newEmployee =  new Employee (role, name, id, email,x);

    employees.push(newEmployee);
    //asks user if he wants to add more people to the team
    ask();


};
//creates manager
 const buildTeam = () => {
     inquirer
     .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter manager's name");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
            validate: id => {
              if (id) {
                return true;
              } else {
                console.log("Please enter manager's id");
                return false;
              }
            }
          },

          {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log("Please enter manager's email");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: office => {
              if (office) {
                return true;
              } else {
                console.log("Please enter manager's office number!");
                return false;
              }
            }
          },
     ])
     .then (answer => {
// calls createEmployee
        createEmployee('Manager', answer.name,answer.id,answer.email,answer.office)
      } )
 };
//creates more employees
const ask = () =>{
    inquirer
    .prompt([
        {
        type: 'confirm',
        name: 'moreEmployees',
        message: 'Would you want to add more employees at this time?',
        default: false,
       
      }
      

    ])
    .then (answer => {
        //if they do want more employees it runs the method that asks for the users input
        if (answer.moreEmployees == true){
            promptUser();
        }
        else{
            console.log(employees);
            generate(employees);
        }
    })
};



 const promptUser= ()  => {
    
    inquirer
  .prompt([ 
    {
    type: 'list',
    name: 'role',
    message: "What is the Employee's job title?",
    choices: ['Engineer', 'Intern'],
}, 

    {////////////////////////
      type: 'input',
      name: 'contribute',
      message: 'Add guideline for contributing to your project.',
      when: ({ roles }) => roles
    }, 
      {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Employee's name");
            return false;
          }
        }
      },

      

        {
          type: 'input',
          name: 'name',
          message: "What is the Employee's name?",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter Employee's name");
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee's id number?",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter Employee's id number");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the Employee's email?",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter Employee's email");
                return false;
              }
            }
          }

    ])
    .then (answer => {
        createEmployee( answer.role, answer.name, answer.id, answer.email,answer.variable);
        
    })
 };
 const generate = team =>{
const page = generateHtml(team)

fs.writeFile('./dist/generatedHTML.html', page, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('read me Page created!');


})
};
// starts app
buildTeam();
