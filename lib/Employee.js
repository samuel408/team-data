const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

//TODO: make a variable that changes name depending on role
function Employee (role,name , id , email,x){
    this.role = role
    this.name = name;
    this.id = id ;
    this.email = email;

}

module.exports = Employee;
