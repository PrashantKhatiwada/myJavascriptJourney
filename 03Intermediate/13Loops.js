// for (let i = 0; i < 10; i++) {
// console.log(i);
// }

const myStates = ["Morang", "Kathmandu", 1995, "Pokhara", "Birgunj", "Illam", "Chitwan"]
for (let a=0;a<myStates.length;a++){
    if(typeof myStates[a]!=='string') break;
    console.log(myStates[a]);
}