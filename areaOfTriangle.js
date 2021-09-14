const sideInput = document.querySelectorAll(".side-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn")

function calculateAreaOfTriangle() {
    areapfTriangle = 0.5*Number(sideInput[0].value)*Number(sideInput[1].value)
    outputEl.innerText = "The Area is " + areapfTriangle;

}

areaBtn.addEventListener("click", calculateAreaOfTriangle);