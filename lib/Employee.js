const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

//TODO: make a variable that changes name depending on role
function Employee (role,name , id , email,x){
    this.role = role
    this.name = name;
    this.id = id ;
    this.email = email;

    if (role == 'Manager'){
        var manager = new Manager(x);
        this.office = manager.office
    }
    if (role == 'Intern'){
        var intern = new Intern(x)
        this.school= intern.school
    }
    if (role == 'Engineer'){
        var engineer = new Engineer(x)
        this.github = engineer.github;
    }


}

module.exports = Employee;
