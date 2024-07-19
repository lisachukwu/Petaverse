// Assignment
//write a fun to output "Good afternoon, Lisa", use pseudo code,


// Step 1: Create a function called greetings with a parameter, name.
const greetings = (name) => {
    // Step 2: Output the Result using .concat to add the value of the name parameter to the result.
    console.log('Good Afternoon '.concat(name));
}
// Step 3: Call the function with the required argument inside.
greetings('Lisa');


//Using template literal
const greeting =(names) => {
    console.log(`Good afternoon, ${names}!`);
}

greeting('Angel')


//write a function to take age and return the year you were born, use pseudo code.

//This function calculates the birth year according to age provided.
// Step 1: Create a function called birth_year with a parameter, age.
function birth_year(age){

    // Step 2: Declaring variable to calculate year of birth
    yearOfBirth = 2024 - age
    // Step 3: Output the Result using .concat to add the value of the yearOfBirth parameter to the result.
    console.log('Your birth year is '.concat(yearOfBirth))
}

// Step 4: Call the function with the required argument inside.
birth_year(12)

//Using template literals
function birth_year2 (namess,age) {
    birthyear = 2024 - age;
    console.log(`${namess} was born on ${birthyear}`);
}

birth_year2('Lisa',12)