// function isEven(element){
// // if (element%2===0){
// //     return true;
// // }
// // return false;
// // return element%2===0;
// }
// var isEven=(element)=>{
//      return element%2===0;
// };
// console.log(isEven(4));

// var result=[2,4,6,8].every(isEven); // if every element is even it will be true
// console.log(result);

var isString=(element)=>{
    if(typeof(element)==String){
return true;
    }
    return false;
}
var stringResult=["Prashant","Urlabari","Nepal"].every(isString);
    console.log(stringResult);


var result=[2,4,6,8].every((e)=>{
    return e%2===0;});
    console.log(result);

var addFunc=(num1,num2)=>{
    return num1+num2;
}
console.log(addFunc(1,4));