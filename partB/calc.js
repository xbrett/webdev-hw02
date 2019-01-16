(function() {
    "use strict";

    var result = 0;
    var calculation = [];
    var isNumber = false;
    var isOpp = false;
    

    function number_clicked(element) {
      var display = document.getElementById('display');

      if (display.innerText.charAt(0) == 0) {
        display.innerText = display.innerText.substr(1);
      }

      display.innerText += element.innerText;

      var opps = ["-","+","/","*"];

      if (opps.includes(calculation[calculation.length - 1]) || isNumber) {
        if (isNumber) {
          calculation.pop();
          calculation.push(display.innerText);
        } else {
          calculation.push(display.innerText);
          isNumber = true;
        }
      } else {
        isNumber = false;
      }
      
    }

    function opp_clicked(element) {
      var display = document.getElementById('display');

      calculation.push(display.innerText);
      calculation.push(element.getAttribute("data-opp"));
      display.innerText = "";

    }

    function evaluate(element) {
      
      var display = document.getElementById('display');
      var calculationStr = "";
      calculation.forEach(function(element) {
        calculationStr += element;
      });

      result = eval(calculationStr);
      var debug = document.getElementById('debug');
      debug.innerText = calculation;
      opp_clicked(element);
      display.innerText = result;

    }

    function clear() {
      result = 0;
      calculation = [];
      var display = document.getElementById('display');
      display.innerText = "";
    }

    function init() {
      var zero = document.getElementById('zero');
      var one = document.getElementById('one');
      var two = document.getElementById('two');
      var three = document.getElementById('three');
      var four = document.getElementById('four');
      var five = document.getElementById('five');
      var six = document.getElementById('six');
      var seven = document.getElementById('seven');
      var eight = document.getElementById('eight');
      var nine = document.getElementById('nine');

      var addOrEquals = document.getElementById('add');
      var subtract = document.getElementById('subtract');
      var multiply = document.getElementById('multiply');
      var divide = document.getElementById('divide');

      zero.addEventListener('click', function() { number_clicked(zero); });
      one.addEventListener('click', function() { number_clicked(one); });
      two.addEventListener('click', function() { number_clicked(two); });
      three.addEventListener('click', function() { number_clicked(three); });
      four.addEventListener('click', function() { number_clicked(four); });
      five.addEventListener('click', function() { number_clicked(five); });
      six.addEventListener('click', function() { number_clicked(six); });
      seven.addEventListener('click', function() { number_clicked(seven); });
      eight.addEventListener('click', function() { number_clicked(eight); });
      nine.addEventListener('click', function() { number_clicked(nine); });

      addOrEquals.addEventListener('click', function() { evaluate(addOrEquals); });
      subtract.addEventListener('click', function() { opp_clicked(subtract); });
      multiply.addEventListener('click', function() { opp_clicked(multiply); });
      divide.addEventListener('click', function() { opp_clicked(divide); });

    }
  
    document.addEventListener('DOMContentLoaded', init, false);

    // Delay the setup code until page is fully loaded.
    //window.addEventListener('load', setup_button, false);
  
    // Immediately call function.
  })();