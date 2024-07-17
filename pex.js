//this is an assignment 

function tod(time) {
    console.log('This function is to note the time of day')
    if (time === 'morning') {
        console.log("Good morning")
    } else if (time === 'Afternoon') {
        console.log('Good Afternoon')
    } else if (time === 'Evening') {
        console.log("Good evening")
    } else {
        console.log('Good night')
    }
}

//calling the function
tod('morning');
tod('Afternoon')

function login(password) {
    
    let new_password = 2345
    var old_password = 1111
    if (password === new_password) {
        console.log("Login Successful")
    } else if (password === old_password){
        console.log("old password, try again")
    }  else {
        console.log("You are a thief")
    }
}

//using the return
function login(password) {
    
    let new_password = 2345
    var old_password = 1111
    if (password === new_password) {
        return password;
    } else if (password === old_password){
        return password;
    }  else {
        return "You are a thief";
    }
}

//output 
console.log(login(1111));


//write a fun to take two params
//add two params 
const addnum = (firstNumber,secondNumber) => {
    let total = firstNumber + secondNumber;
    console.log(total)
}

addnum(1,2)