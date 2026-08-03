function SetUsername(usernamae) {
    //complex DB calls
    this.username = usernamae
    console.log("called")
}

function createUser(username, password, callback) {
    SetUsername.call(this, username)

    this.username = username;
    this.password = password;
}

const user1 = new createUser('rimi', 'password123', function(){
    console.log("User created successfully");
}
);

console.log(user1.username, user1.password);
