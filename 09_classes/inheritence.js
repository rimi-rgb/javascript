class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }   
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}`);
    }
}

class Teacher extends User {
    constructor(username, email, password, subject){
        super(username, email, password);       
        this.subject = subject;
    }
   logMe(){
console.log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}, Subject: ${this.subject}`);
}   
}

const teacher1 = new Teacher('rimi', 'rimi@example.com', 'password123', 'Math');
teacher1.logMe();


const user1 = new User('rakesh')

user1.logMe();

console.log(user1 instanceof Teacher);
