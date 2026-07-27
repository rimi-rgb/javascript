console.log("R");
console.log("I");
console.log("M");
console.log("I");


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
   console.log("Rimi");
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
console.log(loginUserMessage())

