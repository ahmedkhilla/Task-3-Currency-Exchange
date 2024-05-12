"use strict";

//DOM Creation
const body = document.querySelector("body");

body.innerHTML = `
<div class="container">
  <select name="cur-options" id="select">
    <option value="">Please choose an option--</option>
    <option value="nis">New Shekel</option>
    <option value="usd">Dollar USD</option>
    <option value="jod">Jordanian Dinar JOD</option>
  </select>
  <input
    class="input"
    type="text"
    placeholder="Enter the amount here 💱"
    style="height: 70px"
    autofocus
  />
</div>
`;

const selectEl = document.querySelector("#select");
const inputEl = document.querySelector("input");
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
