// This file is my first lessons with array in Javascript
// Arrays are similar to lists in python. 
const students = ["Lisa", "Trevor", "Jumoke", "Simi"]

// using the length function 
// it counts the number of items in the array
console.log(students.length);

//using indexing
// indexing is the memory location a particular item is saved in this array
console.log(students[0]);

// using indexing to change an item in the array
students[0] = "Minna";
console.log(students);

// .push() adds an item to the end of the array
students.push("Lisa");
console.log(students);

// .pop removes items from the end of the array
students.pop();

