// this is 
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

// function declaration
const addNumbers = (firstNumber, secondNumber) => {
    let totalNumber = firstNumber + secondNumber;
    console.log(totalNumber)

}
//calling the function
addNumbers(1,2);

//another way of writing functions
function greetings(name) {
    console.log('Hi ${name}');
}

greetings();

//function example
const checkWeather = (weather) => {
    if (weather === 'cloudy') {
        console.log("Please bring an umbrella");
    } else if (weather === "raining") {
        console.log('Please bring a raincoat');
    } else if (weather === "stormy") {
        console.log("Please bring sunglasses");
    } else {
        console.log("Do whatever you want!")
    }
}

