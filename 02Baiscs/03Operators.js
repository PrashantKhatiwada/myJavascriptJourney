// Calculating the discount percentage

var markedPrice=799;
var sellingPrice=199;

var discountAmount=markedPrice-sellingPrice;

var discountPercentage=(discountAmount/markedPrice)*100;

displayDiscountPercentage = Math.round(discountPercentage);

console.log("The percentage of discount for this item is "+ displayDiscountPercentage+"% off");


//Calculating the simple interest and Compound Interest
var principal = 2000;
var rate=20;
var time= 2;

var rateByHundred=rate/100;

var simpleInterest= (principal*rate*time)/100; //formula for simple interest

const onePlusRateByHundredPowerTime=Math.pow(1+rateByHundred,time);

//Math.round is a function to round off the number
var compoundInterest = Math.round(principal*((onePlusRateByHundredPowerTime)-1)); //formula for compound interest

console.log(simpleInterest);

console.log(compoundInterest);

var result= markedPrice>sellingPrice

console.log(typeof result); //This shows the data type instead of true or false value
