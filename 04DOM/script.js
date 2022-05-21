// // const grandparent = document.getElementById("grandparentId")
// const grandparent = document.querySelector(".grandparent")
// // const parents = Array.from(document.getElementsByClassName("parent"))
// // const parent = document.querySelector(".parent")

// const parents = Array.from(grandparent.children)
// // parents.forEach(changeColor);
// const ParentOne = parents[0]
// const children = ParentOne.children;

// // changeColor(grandparent)
// changeColor(children[0]);

function changeColor(element){
    element.style.backgroundColor = "#333"
}

const childOne = document.querySelector('#child-one')
const childTwo = childOne.nextElementSibling
const parentElm = childOne.parentElement;
const grandparent = childOne.closest('.grandparent');
// const grandparent = parent.parentElement;

// const children = grandparent.querySelectorAll('.child')
// children.forEach(changeColor)
// changeColor(parentElm);
changeColor(childTwo.previousElementSibling)
