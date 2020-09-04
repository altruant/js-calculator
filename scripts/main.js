// alert("hello");

// Define a variable `calculation` pointing to an empty array
let calculation = [];

// Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called;
// add this function as an event listener for the number buttons
function pushNumber() {
    let numberKey = document.querySelectorAll("button.number");
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
    let opKey = document.querySelectorAll("button.operator");
    opKey.forEach(clickEvent =>{clickEvent.addEventListener("click", event => {
      // alert(event.target.value);
      calculation.push(event.target.value);
      console.log(calculation);
    })
  });
}
function pushClear() {
    let clearKey = document.querySelector("button.clear");
    clearKey.addEventListener("click", event => {
      // alert(event.target.value);
      calculation = [];
      console.log(calculation);
    });
}
// Define a function named `calculate` that `alerts()` `=` when pressed; add this function as an event listener for the `=` button
function calculate() {
    let calcKey = document.querySelector("button.equal-sign");
    calcKey.addEventListener("click", event => {
      alert(event.target.value);
    });
}
pushClear();
pushNumber();
pushOperator();
calculate();
