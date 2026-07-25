const accountId = 144553
let accountEmail = "rimi@google.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

//accountId = 2// not allowed


accountEmail = "rm@rm.com"
accountPassword = "434343"
accountCity = "bangaluru"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])