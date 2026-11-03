
// Section 5: Parameters vs Arguments

// Q1. Write a function subtract(a, b).
// Answer: Parameters are a and b. Arguments are 50 and 18.
// The function returns the difference between two numbers.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(50, 18));
// Output: 32


// Q2. Create a function expression greetUser(name).
// Answer: The name parameter receives the argument "Aarav".

let greetUser = function(name) {
    return "Welcome, " + name + "!";
};

console.log(greetUser("Aarav"));
// Output: Welcome, Aarav!


// Q3. Calculate the area of a rectangle.
// Answer: Area = Length × Breadth.
// The function is called twice with different arguments.

function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(12, 5));
console.log(calculateArea(8, 9));
// Output:
// 60
// 72


// Q4. Difference between parameter and argument.
// Answer:
// Parameter: A variable written inside the function definition.
// Argument: An actual value passed when calling the function.

// Example:
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
// Output: 30
// Explanation:
// a and b are parameters.
// 10 and 20 are arguments.


// Q5. Can a function have parameters but be called without arguments?
// Answer: Yes. If arguments are not provided, the parameters get the value undefined by default.

function multiply(a, b) {
    return a * b;
}

console.log(multiply());
// Output: NaN
// Explanation: undefined multiplied by undefined gives NaN.


// Section 6: Return Statement

// Q1. Create a function squareOfNumber(n).
// Answer: The function returns the square of the given number.

function squareOfNumber(n) {
    return n * n;
}

console.log(squareOfNumber(9));
// Output: 81


// Q2. Create a function isAdult(age).
// Answer: It returns true if age is 18 or above, otherwise false.

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(17));
console.log(isAdult(20));
// Output:
// false
// true


// Q3. Create a function getFullName(firstName, lastName).
// Answer: The function joins the first name and last name.

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("Rohit", "Sharma"));
// Output: Rohit Sharma


// Q4. What does a function return if there is no return statement?
// Answer: It returns undefined by default.

function showMessage() {
    console.log("Hello!");
}

let result = showMessage();
console.log(result);
// Output:
// Hello!
// undefined


// Q5. Why do we use return instead of console.log()?
// Answer:
// return sends a value back so it can be stored or reused.
// console.log() only displays a value and does not return it.

function getSum(a, b) {
    return a + b;
}

let total = getSum(10, 20);
console.log(total * 2);
// Output: 60


// Section 7: Why Use Functions? (Real-world Example)

// Q1. Calculate total marks of four students.
// Answer: We create one function and call it four times instead of writing the addition logic repeatedly.

function getTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}

console.log("Student 1:", getTotal(80, 75, 90));
console.log("Student 2:", getTotal(65, 70, 85));
console.log("Student 3:", getTotal(90, 95, 88));
console.log("Student 4:", getTotal(55, 60, 70));
// Output:
// Student 1: 245
// Student 2: 220
// Student 3: 273
// Student 4: 185


// Q2. Calculate Simple Interest.
// Answer: Simple Interest = (Principal × Rate × Time) / 100.

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

console.log(calculateSimpleInterest(10000, 5, 2));
console.log(calculateSimpleInterest(20000, 6, 3));
// Output:
// 1000
// 3600


// Q3. Find average without a function and then using a function.

// Without Function:

let student1Average = (70 + 80 + 90) / 3;
console.log("Student 1 Average:", student1Average);

let student2Average = (60 + 75 + 85) / 3;
console.log("Student 2 Average:", student2Average);

// Output:
// Student 1 Average: 80
// Student 2 Average: 73.33333333333333

// Using Function:

function findAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Student 1 Average:", findAverage(70, 80, 90));
console.log("Student 2 Average:", findAverage(60, 75, 85));

// Output:
// Student 1 Average: 80
// Student 2 Average: 73.33333333333333


// Q4. How do functions reduce code repetition?
// Answer: Functions allow us to write a task once and reuse it whenever required.
// Example: A shopping website can use one calculateTotal()
// function for calculating bills of different customers.


// Q5. Mention any three advantages of functions.
// Answer:
// 1. Code Reusability: Use the same code multiple times.
// 2. Easy Debugging: Find and fix errors in smaller code sections.
// 3. Less Repetition: Avoid writing the same code again and again.