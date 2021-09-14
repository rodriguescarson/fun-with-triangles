const sideInput = document.querySelectorAll(".side-input");
const outputEl = document.querySelector("#output");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")

function calculateHypotenuse() {
    let hypotenuseValue = Math.sqrt(Math.pow(sideInput[0].value,2) + Math.pow(sideInput[1].value,2));
    outputEl.innerText = "The hypotenuse is " + hypotenuseValue;

}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);