function multipleBy5(num){
    
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

createUser.prototype.getUserDetails = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}`);
}

const user1 = new createUser('rimi', 'rimi@example.com', 'password123');
const user2 = new createUser('john', 'john@example.com', 'password456');

user1.printMe();
user2.printMe();