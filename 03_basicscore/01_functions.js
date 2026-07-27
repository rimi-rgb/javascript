//console.log("R");
//console.log("I");
//console.log("I");


function sayMyName(){
    console.log("R");
   console.log("I");
 console.log("M");
 console.log("I");

}

// sayMyName()

//function addTwoNumbers(number1, number2){

    //console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
  //console.log("Rimi");
   // return result
  
    
}

const result = addTwoNumbers(3,5)

//console.log("result: ", result);

function loginUserMessage(username = "ram"){
    if(!username){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("rimi"))
//console.log(loginUserMessage())

function calculateCardPrice(val1, val2,...num1){
    return num1

}
//console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
    username: "rimi",
    prices: 399

}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user)
handleobject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray){
    return getArray[3]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500]));
