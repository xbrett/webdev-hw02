(function() {
    "use strict";

    var result = 0;
    var calculation = [];
    var isNumber = false;
    var newNumber = false;

    function number_clicked(element) {
      var display = document.getElementById('display');

      if (display.innerText.charAt(0) == 0) {
        display.innerText = display.innerText.substr(1);
      }

      var opps = ["-","+","/","*"];

      if (opps.includes(calculation[calculation.length - 1]) || isNumber) {
        if (isNumber) {
          display.innerText += element.innerText;
          calculation.pop();
          calculation.push(display.innerText);
        } else if (newNumber) {
          display.innerText = element.innerText;
          newNumber = false;

        } else {
          display.innerText += element.innerText;
          calculation.push(display.innerText);
          isNumber = true;
        }
      } else {
        display.innerText += element.innerText;
        isNumber = false;
      }
    }

    function decimal_clicked(element) {
      var display = document.getElementById('display');

      if (!(display.innerText.includes('.'))) {
        display.innerText += element.innerText;
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
      calculation.forEach(function(el) {
        calculationStr += el;
      });

      result = eval(calculationStr);
      display.innerText = result;

      calculation = [result];
      calculation.push(element.getAttribute('data-opp'));
      isNumber = false;
      newNumber = true;
    }

    function clear_clicked() {
      result = 0;
      calculation = [];
      isNumber = false;
      newNumber = false;
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
      var decimal = document.getElementById('decimal');

      var addOrEquals = document.getElementById('add');
      var subtract = document.getElementById('subtract');
      var multiply = document.getElementById('multiply');
      var divide = document.getElementById('divide');
      var clear = document.getElementById('clear');

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
      decimal.addEventListener('click', function() { decimal_clicked(decimal); });

      addOrEquals.addEventListener('click', function() { evaluate(addOrEquals); });
      subtract.addEventListener('click', function() { opp_clicked(subtract); });
      multiply.addEventListener('click', function() { opp_clicked(multiply); });
      divide.addEventListener('click', function() { opp_clicked(divide); });
      clear.addEventListener('click', function() { clear_clicked(); });
    }
  
    document.addEventListener('DOMContentLoaded', init, false);

  })();