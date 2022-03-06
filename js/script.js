// set variable typed 
var typed = new Typed('.typing', {                          // id=typing
    strings: ['Veerapat Bunkwang', 'Arm'],                  // set array information to show in website
    typeSpeed: 120,                                          // command set speed forward
    backSpeed: 80,                                          // command set speed backward
    loop: true                                              // set loop infinity (forward-backward)
  });
  // cursor animation
  const cursor = document.querySelector('.cursor');        // input on cursor (variable) .querySelector: return check selector if no matches are found null is returned

  document.addEventListener('mousemove', e => {            // if mousemove go to function e  
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");    // Sets the value of an attribute || mousemove top pageY-10 mousemove left  pageX-10
  })
 // save information
 function save(){
    let btnClear = document.querySelector('button');
    let inputs = document.querySelectorAll('input');
    let name1 = document.getElementById('data-name').value
    let email = document.getElementById('data-email').value
    let phone = document.getElementById('data-phone').value
    let message = document.getElementById('data-message').value
    btnClear.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
        console.log("Name:  "+name1);
        console.log("Email:  "+email);
        console.log("Phone: "+phone);
        console.log("Message:  "+ message);
    });
 }
