//let myName = "Rimi"

//console.log(myName.trim().length);

let myHeros = ["thor", "spiderman", "ironman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "suit",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

let heros = myHeros.map(function(hero){
    return `hero is ${hero}`
})
console.log(heros);

Object.prototype.rimi = function(){
    console.log("rimi is present in all objects");
}

Array.prototype.hayrimi = function(){
    console.log("rimi says hello");

}

//heropower.rimi()
myHeros.rimi()
myHeros.hayrimi()
//heropower.hayrimi()

//inhertiance

const User = {
    name: "Rimi",
    email: "rimi@example.com"
}

const Student = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSStudent = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Student.__proto__ = User

//Modern syntex

Object.setPrototypeOf(Student, User)

let newStudent = Object.create(Student)

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`);
}

"rimi".truelength()