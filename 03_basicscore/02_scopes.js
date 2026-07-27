//var c = 300
let a = 300

if(true){
    let a = 20
const b = 10
 //console.log("INNER: ", a);
}

for(let i=0; i<Array.length; i++){
    const element = Array[i];
}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "rimi"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
}

//one()

if(true) {
    const username = "rimi"
    if (username === "rimi"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//+++++++++++++++++ interesting ++++++++++++++++++


function addone(num){
    return num + 1
}

console.log(addone (5));

addTwo(5)
const addTwo = function(num){
    return num + 2
}

addTwo(5)