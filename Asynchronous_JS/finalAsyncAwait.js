let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let isShopOpen = false;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }

    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(0000)
        console.log("Start the production")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`Ice cream was added to the ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was added as a topping`)

        await time(2000)
        console.log("Serving the icecream")
    }
    catch(error){
        console.log("Customer left",error)
    }
    finally{
        console.log("Day ended! Shop is closed")
    }
}

kitchen();