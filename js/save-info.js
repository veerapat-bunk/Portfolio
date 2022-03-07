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
 }
