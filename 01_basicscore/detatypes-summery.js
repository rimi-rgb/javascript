//primitive

//7 types : string, number, boolearn, null, undefined, symbol,bigInt

const score = 100
const scorvalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 2345676399n

//Reference(Non primitive)

//array, object, functions

const  heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Rimi",
    age: 18,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction)

//https://262.ecma-international.org/5.1/#sec-11.4.3
