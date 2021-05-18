const employee = require("./employee");
const managerCard = `<div class="card col-3 flex-column">
<h5 class="card-header text-center bg-primary text-light">Manager</h5>
<h4 class="card-title mt-3 mx-4">${member.name}</h4>
<ul class="list-group ms-5 my-3 w-50">
  <li class="list-group-item">ID: ${member.id}</li>
  <li class="list-group-item">Email: ${member.email} </li>
  <li class="list-group-item">Office Number: ${member.office}</li>
</ul>
</div>`;
const engineerCard = `<div class="card col-3 flex-column">
<h5 class="card-header text-center bg-primary text-light">Engineer</h5>
<h4 class="card-title mt-3 mx-4">${member.name}</h4>
<ul class="list-group ms-5 my-3 w-50">
  <li class="list-group-item">ID: ${member.id}</li>
  <li class="list-group-item">Email: ${member.email}</li>
  <li class="list-group-item">GitHub Profile ${member.github}</li>
</ul>
</div>`;
const internCard = `<div class="card col-3 flex-column">
<h5 class="card-header text-center bg-primary text-light">Intern</h5>
<h4 class="card-title mt-3 mx-4">${member.name}</h4>
<ul class="list-group ms-5 my-3 w-50">
  <li class="list-group-item">ID: ${member.id}</li>
  <li class="list-group-item">Email: ${member.email}</li>
  <li class="list-group-item">School: ${member.school}</li>
</ul>
</div>\n`;

function genHTMLText(data) {
  let newCard;
  let teamData = ``;
  data.forEach((member) => {
    if (member instanceof employee.manager) {
      newCard = managerCard;
      teamData += newCard;
    } else if (member instanceof employee.engineer) {
      newCard = engineerCard;
      teamData += newCard;
    } else if (member instanceof employee.intern) {
      newCard = internCard;
      teamData += newCard;
    }
  });

  let doc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Manager</title>
  </head>
  <body>
    <head class="container-fluid">
      <h1 class="py-5 bg-dark text-light text-center">Welcome to Your Team!</h1>
    </head>
    <main>
      <div
        class="container-fluid row d-flex flex-wrap mt-5 justify-content-around"
      >
       ${teamData}
      </div>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
  return doc;
}

module.exports = { genHTMLText };
