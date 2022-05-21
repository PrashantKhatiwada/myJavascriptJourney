let info=`[{
    "name": "Prashant",
    "favouriteNumber": 1,
    "isProgrammer": true,
    "hobbies":["Reading","coding","travelling"]
},
{
    "name":"Raghav",
    "favouriteNumber":10,
    "isProgrammer":true,
    "hobbies":null   
}
]`
console.log(JSON.parse(info)[0].name)