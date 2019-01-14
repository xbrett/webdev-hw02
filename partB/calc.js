(function() {
    "use strict";
  
    function button_clicked() {
      var numberClicked = document.getElementsByClassName('number');
      var display = document.getElementById('result');
      display.innerText = numberClicked.value;
    }
  
    // Delay the setup code until page is fully loaded.
    window.addEventListener('load', button_clicked, false);
  
    // Immediately call function.
  })();