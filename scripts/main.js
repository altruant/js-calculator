// alert("hello");

// Define a variable `calculation` pointing to an empty array
let calculation = [];
let numberKey = document.querySelectorAll("button.number")
let opKey = document.querySelectorAll("button.operator");;
let clearKey = document.querySelector("button.clear");
let calcKey = document.querySelector("button.equal-sign");
// Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called;
// add this function as an event listener for the number buttons
function pushNumber() {

    numberKey.forEach(clickEvent => {clickEvent.addEventListener("click", event => {
      // alert(event.target.value);
      calculation.push(event.target.value);
      console.log(calculation);
    })
  });
}
// Define a function named `pushOperator` that `alert()`s the operator (`+`, `-`, `*`, `/`, `C`) associated with its event argument when called;
// add this function as an event listener for the operator buttons
function pushOperator() {

    opKey.forEach(clickEvent =>{clickEvent.addEventListener("click", event => {
      // alert(event.target.value);
      calculation.push(event.target.value);
      console.log(calculation);
    })
  });
}
function pushClear() {

    clearKey.addEventListener("click", event => {
      // alert(event.target.value);
      calculation = [];
      console.log(calculation);
    });
}
// Define a function named `calculate` that `alerts()` `=` when pressed; add this function as an event listener for the `=` button
function calculate() {
    // click event
    calcKey.addEventListener("click", event => {
      // alert(event.target.value)
      let num1 = [];
      let num2 = [];
      let op = "";
      // for loop to create the arrays containing each number to be calculated
      for(let i = 0; i < calculation.length; i++) {
          // console.log(calculation[i]);
          if (calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "*" || calculation[i] == "/") {
            op = calculation[i]
          } else if (op == "+" || op =="-" || op == "*" || op == "/") {
            num2.push(calculation[i]);
          } else {
            num1.push(calculation[i]);
          }
      }
      // converting the arrays to strings
      num1 = num1.join("");
      num2 = num2.join("");
      // converting the strings to numbers and performing the math on them
      let total = 0
      switch(op) {
        case "+" : total = parseInt(num1) + parseInt(num2); break;
        case "-" : total = parseInt(num1) - parseInt(num2); break;
        case "*" : total = parseInt(num1) * parseInt(num2); break;
        case "/" : total = parseInt(num1) / parseInt(num2); break;

      }
      // console.log(num1);
      // console.log(op);
      // console.log(num2);
      // console.log(total)
      alert(total)
    });
}

pushClear();
pushNumber();
pushOperator();
calculate();
