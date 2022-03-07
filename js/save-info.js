 // save information and delete input on text-box
 function save(){
    let btnClear = document.querySelector('button');                      // link button to btnClear(variable)
    let inputs = document.querySelectorAll('input');                      // link between <input> and inputs(variable)
    // link between text-box and variable (by id)
    let name1 = document.getElementById('data-name').value               
    let email = document.getElementById('data-email').value
    let phone = document.getElementById('data-phone').value
    let message = document.getElementById('data-message').value
    btnClear.addEventListener('click', () => {                            // add if btnClear click will command 24-28   
        inputs.forEach(input =>  input.value = '');                       // set value after click  <input> to <input>.value = "" 
         // store data in console
        console.log("Name:  "+name1);                                    
        console.log("Email:  "+email);
        console.log("Phone: "+phone);
        console.log("Message:  "+ message);
        console.log("------------------------------------------------");   
    });
    console.clear();
 }
function changeFontSize(type){                                                               // function button single parameter 
    let ids = ['#am','#de'];                                                                 // link id text array 
    ids.forEach(id =>{                                                                       // for each array element 
        let el = document.querySelector(id);                                                 // get element
        let fontSize = window.getComputedStyle(el,null).getPropertyValue("font-size")        // select command css (font-size)     
        fontSize = parseInt(fontSize);                                                       // convert input string to output integer
        if(type == "increase"){                                                              // if type input increase => id.font-size + 5 px 
            el.style.fontSize = (fontSize + 5) + "px";
        }else{                                                                               // if type input non-increase => id.font-size - 5 px 
            el.style.fontSize = (fontSize - 5) + "px";
        }
    });
}