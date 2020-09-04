// alert("hello");

function pushNumber() {
    let numberKey = document.querySelectorAll("button.number");
    numberKey.forEach(clickEvent => {clickEvent.addEventListener("click", event => {
      alert(event.target.value);

    })
  });
}
pushNumber();
