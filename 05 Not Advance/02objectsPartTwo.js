var User = {
    name:"",
    getUSerName: function(){
        console.log(`User name is ${this.name}`);
    },
};
var prashant = Object.create(User);
prashant.name="Prashant Khatiwada"
prashant.getUSerName();

var hitesh = Object.create(User,{
    name:{value: "hitesh"},
    courseCount: {value:"3"},

});
hitesh.getUSerName()