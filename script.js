var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
const randomButton = document.getElementById("random");

//prints out the gradient in the h3
function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//if a background style is present, it is set
if (backgroundColor) {
    color1.value = backgroundColor;
    color2.value = backgroundColor;
}
//makes values show up on first page load
window.onload = () => {
    color1.value = '#ff0000';
    color2.value = '#ffff00';
    document.querySelector("h3").textContent = backgroundColor;
    setGradient();
};

//adds a function to the randomize button to pick a number between 0 and 16777215 and sets that number for the value for color 1 and color2 
randomButton.addEventListener("click", function () {
    const color1 = Math.floor(Math.random() * 0xffffff);
    const color2 = Math.floor(Math.random() * 0xffffff);

    document.querySelector(".color1").value = `#${color1.toString(16)}`;
    document.querySelector(".color2").value = `#${color2.toString(16)}`;


});

//sets gradient when random button is clicked
document.querySelector("#random").addEventListener("click", setGradient);

