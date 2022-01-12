function parsePage(managers, engineers, interns) {

    if(managers.length > 0) {
        for(let i = 0; i < managers.length; i++){ 
            console.log(managers[i].name);
        }
    }
  
    if(engineers.length > 0) {
        for(let i = 0; i < engineers.length; i++){ 
            console.log(engineers[i].name);
        }
    }

    if(interns.length > 0) {
        for(let i = 0; i < interns.length; i++){ 
            console.log(interns[i].name);
        }
    }    

}






module.exports = parsePage;