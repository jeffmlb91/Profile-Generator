// Declaring function for Manager board
function boardManager(manager) {
  console.log("MANAGERRR", manager);
  return `
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${manager.name.name}</p>
    <p> <i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.name.idNum}</li>
    <li class="list-group-item">Email: <a href="mailto:" ${manager.name.email}> ${manager.name.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.name.officeNumber}</li>
    </ul>
    </div>
    </div>
    </div>    
    `;
}
// Declaring function for Engineer board
function boardEngineer(eng) {
  console.log("ENGINEEEEER", eng);
  let display = "";

  for (let i = 0; i < eng.length; i++) {
    display += `
        <div class="col-md-3">       
        <div class="card">
        <div class="car-title">
        <p> ${eng[i].name.engineerName}</p>
        <p> <i class="fas fa-glasses"></i> Engineer</p>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${eng[i].id.internId}</li>
        <li class="list-group-item">Email: <a href="mailto:" +${eng[i].name.engineerEmail}>${eng[i].name.engineerEmail}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${eng[i].name.engineerGithub}" target="_blank"> ${eng[i].name.engineerGithub}</a></li>
        </ul>
        </div>
        </div>
        </div>   
        `;
  }

  return display;
}
// Declaring function for Intern board
function boardIntern(intrn) {
  console.log("INTERRRRRRN", intrn);
  let display = "";
  for (let i = 0; i < intrn.length; i++) {
    display += `
        
        <div class="col-md-3">       
        <div class="card">
        <div class="car-title">
        <p> ${intrn[i].name.internName}</p>
        <p> <i class="fas fa-user-graduate"></i> Intern</p>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intrn[i].name.internId}</li>
        <li class="list-group-item">Email:<a href="mailto:" +${intrn[i].name.internEmail}> ${intrn[i].name.internEmail}</a></li>
        <li class="list-group-item">School: ${intrn[i].name.internSchool}</li>
        </ul>
        </div>
        </div>
        </div> 
        `;
  }

  return display;
}
// Export modules + Generate boards in front end

module.exports = ({ engineer, intern, manager }) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        </head>
        <body>
        <header>
        Developer Team
        </header>
        <main class="container">
        <div class="row justify-content-center ">
        ${boardManager(manager)} ${boardEngineer(engineer)}
        </div>
        <br/><br/>
        <div class="row justify-content-center ">
        ${boardIntern(intern)}
        </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  
        </body>
        </html>
    
    
    `;
};

// refactor prompts ( remove class generation, at the begining create a team object and return the team object )
