let input = document.querySelector("#name-input")
let output =document.querySelector("#name-output")

input.addEventListener("input", handlerInput)

function handlerInput(event) {
   let inputValue =event.target.value.trim()
    inputValue != ""?  output.textContent = inputValue :output.textContent="Anonymous"
}
