const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./utils/generateHtml.js');
const Employee = require('./lib/Employee.js');
const employees= [];

const createEmployee = (name, id, email) => {
    var newEmployee =  new Employee (name, id, email);
    employees.push(newEmployee);
    ask();


};

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
        if (answer.moreEmployees == true){
            promptUser();
        }
        else{
            console.log(employees);
            generate(employees);
        }
    })
};

 const promptUser = ()  => {
    

    inquirer
  .prompt([ 
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
        createEmployee(answer.name, answer.id, answer.email);
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

 promptUser();
