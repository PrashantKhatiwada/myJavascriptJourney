// Icecream Production - StepWise using Callback

let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}



let order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was selected`)

        callProduction();
    }, 2000)

};

let production = () => {
    setTimeout(() => {
        console.log("Production has started")

        setTimeout(() => {
            console.log("The fruit has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was chosen as a holder`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                console.log("You can have your icecream now.");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)

};

order(0, production);