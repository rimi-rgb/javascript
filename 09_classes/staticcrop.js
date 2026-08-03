class User {
    constructor(username){
        this.username = username;
}

logMe(){
    console.log(`Username: ${this.username}`);
}
static createId(){
    return `123`
}
}

const rimi = new User('rimi')
console.log(User.createId())

class teacher extends User {
    constructor(username, subject){
        super(username)
        this.subject = subject;
    }
}

const iphone = new teacher('iphone', '@iphone.com')
console.log(iphone.logMe());
