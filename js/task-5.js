function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color")
const btnChangeColor = document.querySelector(".change-color")
const bodyElement = document.querySelector("body")

btnChangeColor.addEventListener("click", handlerChangeColor)

function handlerChangeColor(event){
  let randomColor = getRandomHexColor()
  bodyElement.style.backgroundColor = randomColor
  spanColor.textContent = randomColor
}

