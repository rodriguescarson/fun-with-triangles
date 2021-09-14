const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector(("#is-triangle-btn"))
const output = document.querySelector('#output');

function CalculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    return sumOfAngles;
}

function isTriangle() {
    console.log(inputs)
    sumOfAngles= CalculateSumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);
    if (sumOfAngles === 180) {
        output.innerText = "The sum of angles is "+sumOfAngles+" and it is a triangle ";
    } else {
        output.innerText = "The sum of angles is "+sumOfAngles+" and it is not a triangle ";
    }
}

isTriangleBtn.addEventListener("click",isTriangle)