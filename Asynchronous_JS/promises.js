let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let isShopOpen = true;
let order = (time, work) => {

    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time)

        }
        else {
            reject(console.log("Our Shop is Closed!"))
        }
    })

}
order(2000,()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
   return order(0000,()=> console.log("Production has started"))
})

.then(()=>{
    return order(2000,()=> console.log("Fruit was chopped"))
})

.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
    
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("The machine was started.")
    
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`Ice Cream was placed on a ${stocks.holder[0]}`)
    
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`Ice Cream was placed on a ${stocks.toppings[0]}`)
    
    })
})
.then(()=>{
    return order(2000,()=> console.log("Ice Cream was served!"))
})

.catch(()=>{
    console.log("Customer left!")
})

.finally(()=>{
    console.log("Day ended. Shop is closed!")
})