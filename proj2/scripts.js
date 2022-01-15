const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
var audio = new Audio('song.mp3');
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).backgroundColor )

const getBGColor= (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor
};
// var color = getBGColor(pink);
// pink.addEventListener('dblclick', ()=>{

//     center.style.background = color;

// })
const magicColorChanger = (element,color)=>{
return element.addEventListener('click', ()=>{
audio.play();
    center.style.background = color;

})
}
magicColorChanger(red,getBGColor(red))
magicColorChanger(cyan,getBGColor(cyan))
magicColorChanger(pink,getBGColor(pink))
magicColorChanger(orange,getBGColor(orange))
magicColorChanger(violet,getBGColor(violet))