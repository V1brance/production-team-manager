const inquirer = require("inquirer");

class employee {
  constructor(name = "", id = 0, email = "") {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class manager extends employee {
  constructor(name = "", id = 0, email = "", officeNum = 0) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
}

class engineer extends employee {
  constructor(name = "", id = 0, email = "", github = "") {
    super(name, id, email);
    this.github = github;
  }
}

class intern extends employee {
  constructor(name = "", id = 0, email = "", school = "") {
    super(name, id, email);
    this.school = school;
  }
}

module.exports = { employee, manager, engineer, intern };
