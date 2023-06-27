const btnUnderline = document.querySelector(".btn-underline");
const btnItalic = document.querySelector(".btn-italic");
const btnBold = document.querySelector(".btn-bold");

const btnDecrement = document.querySelector(".btn-decrement");
const btnIncrement = document.querySelector(".btn-increment");
const currentFontSize = document.querySelector(".btn-current-font-size");

const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnPurple = document.querySelector(".btn-purple");
const btnBlack = document.querySelector(".btn-black");

const text = document.querySelector(".text");

btnUnderline.onclick = () => {};
btnItalic.onclick = () => {};
btnBold.onclick = () => {};

btnDecrement.onclick = () => {};
btnIncrement.onclick = () => {};

btnRed.onclick = () => {
    alert("fudeu")
    text.style.color = "red"
};
btnBlue.onclick = () => {
    text.style.color = "blue"
};
btnPurple.onclick = () => {
    text.style.color = "purple"
};
btnBlack.onclick = () => {
    text.style.color = "black"
};