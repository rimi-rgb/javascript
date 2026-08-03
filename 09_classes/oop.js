

const user = {
    username: 'rimi',
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }

}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.loginCount = 0;
    this.signedIn = false;

   // return this;
}

const userOne = new User('rimi', 'rimi@example.com', 'password123');

console.log(userOne.username, userOne.email, userOne.password, userOne.loginCount, userOne.signedIn);