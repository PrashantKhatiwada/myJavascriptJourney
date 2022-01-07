const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).backgroundColor )

const getBGColor= (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor
};
console.log(getBGColor(violet));