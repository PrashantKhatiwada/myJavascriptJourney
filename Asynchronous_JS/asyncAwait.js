let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let isShopOpen = true;

// Promise

// let order = ()=>{
//     return new promise((resolve,reject)=>{
//     if(true){
//         resolve();
//     }
//     else{
//         reject();
//     }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){

//     try{

//     await abc;

//     }
//     catch(error){
//         console.log("abc doesn't exist",error);
//     }
//     finally{console.log("Runs code anyways")}
// }

// order()
// .then(()=>{
//     console.log("I can't think any thing")
// })

let toppingsChoice = ()=>{
    
return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve(console.log("Which topping would you like?"))

    },3000)
})

};

async function kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")

    await toppingsChoice()
    
    console.log("D")
    console.log("E")
}
kitchen();
console.log("Doing the dishes")
console.log("Taking others orders")
console.log("Cleaning the dishes")