const sideInput = document.querySelectorAll(".side-input");
const outputEl = document.querySelector("#output");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")

function calculateHypotenuse() {
    const side1 = sideInput[0].value;
    const side2 = sideInput[1].value;
    if (side1 < 0 || side2 < 0) {
        outputEl.innerText = "Please enter positive numbers";
    } else {
        let hypotenuseValue = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
        outputEl.innerText = "The hypotenuse is " + hypotenuseValue;
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);