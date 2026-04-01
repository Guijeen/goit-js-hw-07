
const list = document.querySelector("#categories")
console.log(`Number of categories : ${list.childElementCount}`);
const listItem = document.querySelectorAll(".item")

listItem.forEach(li => {
    console.log(`Category : ${li.firstElementChild.textContent}`);
    console.log(`Elements ${li.lastElementChild.childElementCount}`);   
});
