"use strict";

//DOM Creation
const body = document.querySelector("body");

body.innerHTML = `
<h1 class ="primary-heading" >Currency Exchange to New Shekel</h1>
<div class="container">
  <select name="cur-options" id="select">
    <option value="">Please choose an option--</option>
    <option value="nis">New Shekel</option>
    <option value="usd">Dollar USD</option>
    <option value="jod">Jordanian Dinar JOD</option>
  </select>
  <div class="flex--input">
    <input
      class="input"
      type="text"
      placeholder="Enter the amount here 💱"
      autofocus
    />
    <button class="btn--clear">Clear</button>
  </div>
</div>
`;

const selectEl = document.querySelector("#select");
const inputEl = document.querySelector("input");
const clearBtnEl = document.querySelector(".btn--clear");
let input;
const changeCurr = function (e) {
  input = inputEl.value;
  const selectedOption = e.target.options[e.target.selectedIndex];
  if (selectedOption.value === "usd") {
    inputEl.value = "";
    inputEl.value = input * 3;
  }
  if (selectedOption.value === "jod") {
    inputEl.value = "";
    inputEl.value = input * 5;
  }
};

selectEl.addEventListener("change", (e) => changeCurr(e));
clearBtnEl.addEventListener("click", () => {
  inputEl.value = input = "";
});
