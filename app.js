
function clicus() {
    let age =  document.getElementById("age").value;
   
    if( age >= 18 ){
        alert("vous pouvez entrer sur le site");
    } else {
       
        alert("vous ne pouvez pas entrer sur le site") ;
    }
        
    
};




function clocos(){
    let naissance = document.getElementById("date").value;
    let date =  new Date(new Date() - new Date(naissance)).getFullYear() - 1970;

    /*let année = date.getFullYear();*/
    /*let resultat =  année - naissance;*/
    
    if(date >= 18){
       alert("vous etes majeur");
    }else 
    alert("vous n'etes pas majeur");
    
    
};
