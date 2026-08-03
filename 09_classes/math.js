//const descrepter = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descrepter);

//console.log(Math, PI);
//Math.PI = 5
//console.log(Math,PI);

const chai = {
    name: 'ginegr chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nehi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperties(chai, 'name', {
   //writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


    
    
for (let [key, value] of object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} ; ${value}`);
    }
}

