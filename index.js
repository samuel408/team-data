const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml.js');
const Employee = require('./lib/Employee.js');
let team = [];
const createEmployee = (name, id, email) => {
    var newEmployee =  new Employee (name, id, email);
    team.push(newEmployee)
};

 const promptUser = (team) => {
  if (!team){
     team = [];
  }

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



        createEmployee(team.nameInput, team.idInput, team.emailInput);

 };



 promptUser();
//  .then(team => {
//     const page = generateHtml(team);

//     fs.writeFile('./dist/generatedHTML.hmtl', page, err => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       console.log('read me Page created!');
    
    
//     });
//   });