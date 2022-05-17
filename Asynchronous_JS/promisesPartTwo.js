// let p = new Promise((resolve, reject)=>{
//     let a = 1+1
//     if(a==3){
//     resolve("Success")
//     }
//     else{
//         reject("Failed")
//     }
// })

// p.then((message)=>{
//     console.log('This is in the then - ' + message)
// }).catch((message)=>{
//     console.log("This is in the catch - " + message)
// })

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error= true;
            if(!error){
                console.log('Your promise was fulfilled!')
                resolve();
            }
            else{
                console.log("Your promise was not fulfilled")
                reject('Sorry not fullfilled.')
            }
        },2000)
    })
}

func1().then(function(){
    console.log("Thanks for resolving!")
})
.catch(function(message){
    console.log("Sorry for not fulfilling the promise!" + message)
})