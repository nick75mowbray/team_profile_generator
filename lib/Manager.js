// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(namePassed, idPassed, emailPassed, officeNumPassed){
        super(namePassed, idPassed, emailPassed);
        this.officeNumber = officeNumPassed;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;