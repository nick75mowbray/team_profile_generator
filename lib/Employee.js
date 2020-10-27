// TODO: Write code to define and export the Employee class
class Employee {
    constructor(namePassed, idPassed, emailPassed){
        this.name = namePassed;
        this.id = idPassed;
        this.email = emailPassed;
        this.role = "rolePassed";
        // consider adding backup values
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return "Employee"; 
    }
}

module.exports = Employee;