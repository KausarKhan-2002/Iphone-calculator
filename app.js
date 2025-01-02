let inputVal = document.getElementById("inputVal");
let result = document.getElementById("result");
const btns = document.querySelectorAll(".calc");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    if (btn.innerText == "AC") {
      inputVal.value = ""
      result.innerHTML = 0
      return
    }

    if (btn.innerText == "−") {
      inputVal.value += "-"
      return
    }

    if (btn.innerText == "X2") {
      inputVal.value += "**"
      return
    }

    if (btn.innerText == "π") {
      if (inputVal.value.length > 0) {

        if (inputVal.value[inputVal.value.length-1] == "+") {
          let inp = Number(inputVal.value.split("").slice(0, inputVal.value.length-1).join(""))
          inputVal.value = inp + Math.PI
          return
        }
        
        inputVal.value = eval(inputVal.value) // stop NaN
        inputVal.value *= Math.PI
        return
      }

      inputVal.value += Math.PI
      
      return
    }

    if (btn.innerText == "e") {
      if (inputVal.value.length > 0) {
        
        inputVal.value = eval(inputVal.value)
        
        inputVal.value = eval(inputVal.value * Math.E)
        return
      }
      inputVal.value = Math.E
      return
    }

    if (btn.innerText == "=") {
      try {
        let calculate = eval(inputVal.value);

        result.innerHTML = calculate;
      } catch (err) {}
      return;
    }

    if (btn.innerText == "X") {
      inputVal.value += "*"
      return
    }

    if (btn.innerText == "÷") {
      inputVal.value += "/"
      return
    }

    if (btn.firstElementChild?.innerText == "x") {
      if (inputVal.value.length > 0) {
        inputVal.value = inputVal.value
          .split("")
          .slice(0, inputVal.value.length - 2)
          .join("");
      }
      result.innerText = "0";
      return;
    }

 

    inputVal.value += btn.innerText;
  });
});


// console.log(Math.E * 2);

<div
        class="cursor-pointer active:bg-gray-800 absolute bottom-3 w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-900 shadow-sm shadow-black"
        style="left: 50%; transform: translateX(-50%);"
      ></div>