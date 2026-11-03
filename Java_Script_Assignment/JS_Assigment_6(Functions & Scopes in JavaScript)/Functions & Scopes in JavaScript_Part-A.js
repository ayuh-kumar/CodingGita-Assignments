// Functions in JavaScript


//  What Is a Function?

// Q1. Why do we use functions instead of writing the same code again and again?
// Answer: Functions allow us to write code once and reuse it whenever needed.
// Example:

function greet() {
    console.log("Welcome to JavaScript!");
}

greet();
greet();
// Output:
// Welcome to JavaScript!
// Welcome to JavaScript!


// Q2. List any four advantages of functions.
// Answer:
// 1. Code Reusability: Write once and use multiple times.
// 2. Less Code: Avoid writing the same code repeatedly.
// 3. Easy Debugging: Errors can be found and fixed easily.
// 4. Modularity: Divide a large program into smaller parts.


// Q3. How will a function help display a welcome message at 6 different places?
// Answer: Create one function and call it six times instead of writing the welcome message six times.

function welcomeMessage() {
    console.log("Welcome to our website!");
}

welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
welcomeMessage();
// Output: Welcome to our website! (6 times)


// Q4. Show the same code written twice without a function and once with a function.
// Answer: Without a function, the same code must be repeated. With a function, we write it once and call it whenever needed.

// Without Function:
console.log("Hello Student!");
console.log("Hello Student!");

// With Function:
function sayHello() {
    console.log("Hello Student!");
}

sayHello();
sayHello();


// Q5. Give one real-life analogy that explains the idea of a function.
// Answer: A washing machine is like a function.
//         We give it clothes and detergent as input, it processes them,
//         and gives us clean clothes as output.


// Q6. Why do functions make debugging easier?
// Answer: Functions divide a program into smaller parts.
//         We can check and fix errors in a particular function without
//         checking the entire program.


//  Function Declaration

// Q1. Create a function declaration named displayCourse.
// Answer: A function declaration defines a function using the function keyword.

function displayCourse() {
    return "JavaScript Fundamentals";
}

console.log(displayCourse());
// Output: JavaScript Fundamentals


// Q2. Create getStudentStatus and store its returned value.
// Answer: The return statement sends a value back to the place
//         where the function was called.

function getStudentStatus() {
    return "Active Learner";
}

let studentStatus = getStudentStatus();
console.log(studentStatus);
// Output: Active Learner


// Q3. Call a function before its definition.
// Answer: It works because function declarations are hoisted.
//         JavaScript allows us to call them before their definition.

showMessage();

function showMessage() {
    console.log("Function Declaration");
}
// Output: Function Declaration


//  Function Expression

// Q1. Create a function expression named showMotto.
// Answer: A function expression stores a function inside a variable.

let showMotto = function() {
    return "Code. Learn. Grow.";
};

console.log(showMotto());
// Output: Code. Learn. Grow.


// Q2. Create a function expression getSemester.
// Answer: The function returns the value 3 when called.

let getSemester = function() {
    return 3;
};

console.log(getSemester());
// Output: 3


// Q3. Try to call a function expression before its definition.
// Answer: It gives a ReferenceError because a let variable
//         cannot be accessed before its initialization.

// Example:
// showSubject(); // ReferenceError

let showSubject = function() {
    console.log("JavaScript");
};

showSubject();
// Output: JavaScript
// Uncomment the earlier call to see the error.


//  Function Calling (Invocation)

// Q1. Call greetStudent four times.
// Answer: Function invocation means executing a function by calling its name.

function greetStudent() {
    return "All the best for your coding journey!";
}

console.log(greetStudent());
console.log(greetStudent());
console.log(greetStudent());
console.log(greetStudent());
// Output: All the best for your coding journey! (4 times)


// Q2. Create todayFocus and store its result.
// Answer: The returned value is stored in a variable for later use.

let todayFocus = function() {
    return "Focus on functions today";
};

let focusMessage = todayFocus();
console.log(focusMessage);
// Output: Focus on functions today


// Q3. Create one function declaration and one function expression.
// Answer: Both functions are called twice, producing four results.

// Function Declaration:
function getGreeting() {
    return "Hello, Student!";
}

// Function Expression:
let getMotivation = function() {
    return "Keep Learning!";
};

// Calling Function Declaration twice:
console.log(getGreeting());
console.log(getGreeting());

// Calling Function Expression twice:
console.log(getMotivation());
console.log(getMotivation());

// Output:
// Hello, Student!
// Hello, Student!
// Keep Learning!
// Keep Learning!