const fs = require('fs');

function parsePage(managers, engineers, interns) {

    let allManagers = '';
    let allEngineers = '';
    let allInterns = '';
    let allCards = '';

    managers.forEach( (manager) => {
        let card = `<div class='manager container-fluid d-flex p-1 m-1'>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-center">${manager.name}</h5>
              <p class="card-text text-center">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center">${manager.id}</li>
              <li class="list-group-item text-center"><a href="${manager.email}" class="card-link">${manager.email}</a></li>
              <li class="list-group-item text-center">${manager.officephone}</li>
            </ul>
        </div>
    </div>`

    allManagers += card;

    console.log('finished managers forEach');
        
    });


    engineers.forEach( (engineer) => {
        let card = `<div class='engineer container-fluid d-flex p-1 m-1'>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-center">${engineer.name}</h5>
              <p class="card-text text-center">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center">${engineer.id}</li>
              <li class="list-group-item text-center"><a href="${engineer.email}" class="card-link">${engineer.email}</a></li>
              <li class="list-group-item text-center"><a href="${engineer.github}" class="card-link">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`

        allEngineers += card;
        
        console.log('finished engineers forEach');
    }
    );


    interns.forEach( (intern) => {
        console.log(intern.name)
        let card = `<div class='intern container-fluid d-flex p-1 m-1'>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-center">${intern.name}</h5>
              <p class="card-text text-center">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center">${intern.id}</li>
              <li class="list-group-item text-center"><a href="${intern.email}" class="card-link">${intern.email}</a></li>
              <li class="list-group-item text-center"><a href="${intern.school}" class="card-link">${intern.school}</a></li>
            </ul>
        </div>
    </div>`

    allInterns += card;
    });

    console.log('finished interns forEach');


   allCards = allManagers + allEngineers + allInterns;



   console.log('setting html to createHTML(allCards)');

   let html = createHTML(allCards);

   console.log(html);

   console.log('fs write file next');
   fs.writeFile('./dist/index.html', html, (err) => {
       if (err) console.log(err);
       if (!err) console.log('success');
   });
}


function createHTML(cards) {


    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <link href='./styles.css' rel='stylesheet'>
    
        <title>Team Profiles</title>
    </head>
    
    <body class='container-fluid d-flex flex-column p-0 '>
    
        <h1 class='border text-center'>Team Profiles</h1>
    
        ${cards}
    
        
    </body>
    </html>`

}


module.exports = parsePage;