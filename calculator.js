let a = "";
let b = "";
let sign = "";
let finish = false;

let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["-", "+", "x", "/"];

const screen = document.querySelector(".screen");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  screen.textContent = "0";
}

document.querySelector(".AC").addEventListener("click", clearAll);

let buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    let key = event.target.textContent;
    console.log(key);

    if (digit.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        screen.textContent = a;
        console.log(a, b, sign);
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        screen.textContent = b;
      } else {
        b += key;
        screen.textContent = b;
        console.log(a, b, sign);
      }
      console.log(a, b, sign);
      return;
    }
    if (action.includes(key)) {
      sign = key;
      screen.textContent = sign;
      console.log(a, b, sign);
      return;
    }
    if (key === "=") {
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "x":
          a = a * b;
          a.toFixed(3);
          break;
        case "/":
          if (b === "0") {
            screen.textContent = "Error";
            a = "";
            b = "";
            sign = "";
            return;
          }
          a = a / b;
          a.toFixed(3);
          break;
      }
      finish = true;
      screen.textContent = a;
    }
  });
}
