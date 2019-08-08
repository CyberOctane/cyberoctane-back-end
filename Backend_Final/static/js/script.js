var bgchanged = false;
var hellochanged = false;

var centerLine;
var mousePosX;
var mouseIsLeft;

centerLine = window.innerWidth / 2;
var seperators = document.querySelectorAll(".seperator");

window.addEventListener('resize', calcCenterLine);
window.addEventListener('mousemove', getMousePosition);

function calcCenterLine() {
    centerLine = window.innerWidth / 2;
}

// Get mouse position
function getMousePosition(e) {
    mousePosX = e.clientX;
    if (centerLine - mousePosX > 0) {
        mouseIsLeft = true;
    } else {
        mouseIsLeft = false;
    }
    addAnimationClass();
}

function addAnimationClass() {
    if (mouseIsLeft == true) {
        for (let i = 0; i < seperators.length; i++) {
            const seperator = seperators[i];
            seperator.classList.remove("animation-r-l");
            if (seperator.classList.contains("animation-l-r") == false) {
                seperator.classList.add("animation-l-r");
            }
        }
    } else {
        for (let i = 0; i < seperators.length; i++) {
            const seperator = seperators[i];
            seperator.classList.remove("animation-l-r");
            if (seperator.classList.contains("animation-r-l") == false) {
                seperator.classList.add("animation-r-l");
            }
        }
    }
}

function changeBGColor() {
    var bgColor = document.getElementById("container");
    if (bgchanged == false) {
        bgColor.style.background = "radial-gradient(circle, #101C23, #151125)";
        bgchanged = true;
    } else {
        bgColor.style.background = "radial-gradient(circle closest-side, #353535, #1d1d1b)";
        bgchanged = false;
    }
}

function changeHelloColor() {
    var helloH1 = document.getElementById("hello");
    if (hellochanged == false) {
        helloH1.style.color = "#f8ef24";
        hellochanged = true;
    } else {
        helloH1.style.color = "#ffffff";
        hellochanged = false;
    }
}