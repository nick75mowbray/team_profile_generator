const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// declare global variables
let teamName = "";
let EmployeesArr = [];
// for setting a default id
let currentID = 0;

// prompt for user to select employee type or end selection
function employeeTypeQuestion(){
    console.log("\nAdd team member:");
    inquirer.prompt({
        name: "employee",
        message: "Employee type:",
        type: "list",
        choices: ["engineer", "intern", new inquirer.Separator(), "done"]})
.then(answers => {
    // if 'intern' selected run intern questions
    if (answers.employee === "intern"){
        internQuestion();
    // if 'engineer' selected run engineer questions
    } else if (answers.employee === "engineer"){
        engineerQuestion();
    } 
    // if 'done' selected program will stop
    else if (answers.employee === "done"){
        renderHtml();
    }
}).catch(error => {
    console.error(error);
})
};

// manager prompt that will run first before any other prompts
function ManagerQuestion(){
    // increase default id by 1
    currentID++;
    console.log("\n");
    inquirer.prompt([{
        name: "team",
        message: "Team name:",
        type: "input",
        default: "My Team"},
        {name: "name",
        message: "Managers name:",
        type: "input"},
        {name: "id",
        message: "ID:",
        type: "Number",
        default: currentID},
        {name: "email",
        message: "Email:",
        type: "input"},
        {name: "officeNumber",
        message: "Office number:",
        type: "number"}])
.then( answers => {
    // create new manager object
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    // add manager to array
    EmployeesArr.push(manager);
    // save team name
    teamName = answers.team;
    // set the current id (if the user enters a custom id)
    currentID = answers.id;
    // run prompt to generate another profile 
    employeeTypeQuestion();
}).catch(error => {
    console.error(error);
})
};

function internQuestion(){
    console.log("\nIntern details:");
    currentID++;
    inquirer.prompt([{
        name: "name",
        message: "Intern name:",
        type: "input"},
        {name: "id",
        message: "ID:",
        type: "number",
        default: currentID},
        {name: "email",
        message: "Email:",
        type: "input"},
        {name: "school",
        message: "School:",
        type: "input"}])
.then( answers => {
    // create new intern object
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    // add intern to array
    EmployeesArr.push(intern);
    // set the current id (if the user enters a custom id)
    currentID = answers.id;
    // run prompt to generate another profile 
    employeeTypeQuestion();
}).catch(error => {
    console.error(error);
});

};

// questions for creating an engineer profile
function engineerQuestion(){
    console.log("\nEngineer details:");
    // set the new default id
    currentID++;
    inquirer.prompt([{
        name: "name",
        message: "Engineer name:",
        type: "input"},
        {name: "id",
        message: "ID:",
        type: "number",
        default: currentID},
        {name: "email",
        message: "Email:",
        type: "input"},
        {name: "github",
        message: "GitHub username:",
        type: "input"}])
.then( answers => {
    // create new engineer object
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    // add engineer to an array
    EmployeesArr.push(engineer);
    // set the current id (if the user enters a custom id)
    currentID = answers.id;
    // run prompt to generate another profile 
    employeeTypeQuestion();
}).catch(error => {
    console.error(error);
})
};
 
// call the first lot of questions
ManagerQuestion();

function renderHtml(){
    // call render function
    const myhtml = render(EmployeesArr, teamName);
    fs.writeFile(outputPath, myhtml, "utf-8", function(err){
        if (err) throw err;
        console.log("success! team.html has been created");
    });
}

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
