const name = "Rimi"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(`Rimi-mi-com`)

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Rimi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rimi.com/rimi%20mondal"
console.log(url.replace('%20', '-'));
console.log(url.includes('Rimi'));

console.log(gameName.split('-'));
