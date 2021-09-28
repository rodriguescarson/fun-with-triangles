const sideInput = document.querySelectorAll(".side-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn")

function calculateAreaOfTriangle() {
    const base = Number(sideInput[0].value);
    const height = Number(sideInput[1].value);

    if (base < 0 || height < 0) {
        outputEl.innerText = "Please enter positive numbers";

    } else {
        areapfTriangle = 0.5 * base * height;
        outputEl.innerText = "The Area is " + areapfTriangle;
    }
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);