const btn05 = document.getElementById("btn05%");
const btn10 = document.getElementById("btn10%");
const btn15 = document.getElementById("btn15%");
const btn25 = document.getElementById("btn25%");
const btn50 = document.getElementById("btn50%");
const btnCustom = document.getElementById("btncus");
const btnReset = document.getElementById("btnreset");

let inpBill = document.getElementById("inpbill");
let inpCountPerson = document.getElementById("inpcountperson");

let resultTip = document.getElementById("resulttip");
let resultTotal = document.getElementById("resulttotal");

let tipFinder = -1;
let resultTipValue = 0;
let resultTotalValue = 0;
let cusTipValue = 0;

btn05.addEventListener("click", function () {
  tipFinder = 5;
});
btn10.addEventListener("click", function () {
  tipFinder = 10;
});
btn15.addEventListener("click", function () {
  tipFinder = 15;
});
btn25.addEventListener("click", function () {
  tipFinder = 25;
});
btn50.addEventListener("click", function () {
  tipFinder = 50;
});
btnCustom.addEventListener("click", function () {
  cusTipValue = Number(prompt("enter any price: "));
  while (isNaN(cusTipValue)) {
    cusTipValue = Number(prompt("enter valid price: "));
  }
  cusTipValue = cusTipValue;
  tipFinder = 0;
});

function calculateBill(tipValue) {
  if (inpBill.value == "" || inpCountPerson.value == "") {
    resultTip.value = 0;
    resultTotal.value = 0;
  } else {
    resultTipValue =
      (Number(inpBill.value) * tipValue) / Number(inpCountPerson.value);
    resultTotalValue =
      (Number(inpBill.value) + resultTipValue) / Number(inpCountPerson.value);
  }
}

function fxReset() {
  tipFinder = -1;
  resultTipValue = 0;
  resultTotalValue = 0;
  cusTipValue = 0;

  inpBill.value = "";
  inpCountPerson.value = "";
}

btnReset.addEventListener("click", function () {
  if (tipFinder == 5) {
    calculateBill(0.05);
  }
  if (tipFinder == 10) {
    calculateBill(0.1);
  }
  if (tipFinder == 15) {
    calculateBill(0.15);
  }
  if (tipFinder == 25) {
    calculateBill(0.25);
  }
  if (tipFinder == 50) {
    calculateBill(0.5);
  }
  if (tipFinder == 0) {
    calculateBill(cusTipValue / 100);
  }

  resultTipValue = resultTipValue.toFixed(2);
  resultTotalValue = resultTotalValue.toFixed(2);

  resultTip.textContent = "$" + resultTipValue;
  resultTotal.textContent = "$" + resultTotalValue;

  fxReset();
});
