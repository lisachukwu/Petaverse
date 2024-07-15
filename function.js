function 

let password = 1234
let new_password = 2345
var old_password = 1111
if (password === new_password) {
    console.log("Login Successful")
} else if (password === old_password){
    console.log("old password, try again")
}  else {
    console.log("You are a thief")
}