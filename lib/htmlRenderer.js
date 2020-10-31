const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

function render(employees, teamName){
  let managerArr = [];
  let engineerArr = [];
  let internArr = [];

  managerArr.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  engineerArr.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  internArr.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );
    
  return renderAll(engineerArr, internArr, managerArr, teamName);
// renderMain(html.join(""));
};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};


// render all roles to page
function renderAll(engineerArr, internArr, managerArr, teamPassed){
    let template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    template = replacePlaceholders(template, "manager", managerArr);
    template = replacePlaceholders(template, "engineers", engineerArr);
    template = replacePlaceholders(template, "interns", internArr);
    template = replacePlaceholders(template, "teamName", teamPassed);
    return template;
  };


const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
