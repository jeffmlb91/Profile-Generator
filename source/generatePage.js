// Declaring function for Manager board
function boardManager(manager) {
    return`
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${manager.obtainName()}</p>
    <p> <i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.obtainId()}</li>
    <li class="list-group-item">Email: <a href="mailto:" ${manager.obtainEmail()}> ${manager.obtainEmail()}</a></li>
    <li class="list-group-item">Office Number: ${manager.obtainOfficeNumber()}</li>
    </ul>
    </div>
    </div>
    </div>    
    `;
}
// Declaring function for Engineer board
function boardEngineer(eng) {

    let display = "";

    for (let i = 0; i < eng.length; i++) {
        display += `
        <div class="col-md-3">       
        <div class="card">
        <div class="car-title">
        <p> ${eng[i].name}</p>
        <p> <i class="fas fa-glasses"></i> Engineer</p>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${eng[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:" +${eng[i].email}>${eng[i].email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${eng[i].github}" target="_blank"> ${eng[i].github}</a></li>
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
    let display = "";
    for (let i = 0; i < intrn.lenght; i++) {
        display += `
        
        <div class="col-md-3">       
        <div class="card">
        <div class="car-title">
        <p> ${intrn[i].name}</p>
        <p> <i class="fas fa-user-graduate"></i> Intern</p>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intrn[i].id}</li>
        <li class="list-group-item">Email:<a href="mailto:" +${intrn[i].email}> ${intrn[i].email}</a></li>
        <li class="list-group-item">School: ${intrn[i].school}</li>
        </ul>
        </div>
        </div>
        </div> 
        `
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
    
    
    `
}

// refactor prompts ( remove class generation, at the begining create a team object and return the team object )