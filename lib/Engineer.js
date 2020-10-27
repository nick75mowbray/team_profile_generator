const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
 
class Engineer extends Employee {
    constructor(namePassed, idPassed, emailPassed, githubPassed){
        super(namePassed, idPassed, emailPassed);
        this.github = githubPassed;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;