// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(namePassed, idPassed, emailPassed, schoolPassed){
        super(namePassed, idPassed, emailPassed);
        this.school = schoolPassed;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;