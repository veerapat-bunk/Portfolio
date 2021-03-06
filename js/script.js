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
// set mode dark-light
var icon = document.getElementById("switch-mode");                // link between class=icon and icon (variable) 
icon.onclick = function(){                                 // if click to function 
    // switch icon img toggle 
    document.body.classList.toggle("dark");                
    if(document.body.classList.contains("dark")){
        icon.src = "/picture/sun.png";
    }else{
        icon.src = "/picture/moon.png";
    }
};