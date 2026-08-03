class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}rimi`
    }

    set password(value){
        this._password = value
    }
}

const rimi = new User("@rimi.ai", "123")
console.log(rimi._password);
