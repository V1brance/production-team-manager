const employee = require("./lib/employee");
const fs = require("fs");
const inquirer = require("inquirer");
const { get } = require("http");
const { create } = require("domain");

function getManager(array) {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter the team manager's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the manager's id:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the manager's email:",
    },
    {
      name: "office",
      type: "input",
      message: "Enter the manager's office number:",
    },
  ]);
}

function getNextType() {
  return inquirer.prompt([
    {
      name: "type",
      type: "list",
      message: "Add a new member or exit?",
      choices: ["Engineer", "Intern", "Exit"],
    },
  ]);
}

function getEngineer() {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter the engineer's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the engineer's id:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the manager's email:",
    },
    {
      name: "github",
      type: "input",
      message: "Enter the engineer's GitHub username:",
    },
  ]);
}

function getIntern() {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter the intern's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the intern's id:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the intern's email:",
    },
    {
      name: "school",
      type: "input",
      message: "Enter the intern's school:",
    },
  ]);
}

async function createEmployee(type, array) {
  switch (type) {
    case "manager":
      const managerData = await getManager();
      console.log(managerData);
      const newManager = new employee.manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.office
      );
      array.push(newManager);
      break;
    case "engineer":
      const engineerData = await getEngineer();
      const newEngineer = new employee.engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      array.push(newEngineer);
      break;
    case "intern":
      const internData = await getIntern();
      const newIntern = new employee.intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      array.push(newIntern);
      break;
  }
}

async function init() {
  let fullTeam = [];
  await createEmployee("manager", fullTeam);
  let moreStaff = true;
  while (moreStaff && fullTeam.length != 0) {
    let nextType = await getNextType();
    switch (nextType.type) {
      case "Exit":
        moreStaff = false;
        break;
      case "Engineer":
        await createEmployee("engineer", fullTeam);
        break;
      case "Intern":
        await createEmployee("intern", fullTeam);
        break;
    }
  }
  console.log(fullTeam);
}
init();
