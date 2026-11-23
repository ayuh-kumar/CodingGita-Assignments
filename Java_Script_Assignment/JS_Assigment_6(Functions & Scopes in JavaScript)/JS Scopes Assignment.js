// JavaScript Assignment: Scope and Hoisting



// Section 1: What Is Scope?


// Q1. 

// Global variable: city
// Function-scoped variable: country
// Both variables can be accessed inside display() because
// the function can access variables from the global scope.

var city = "Surat";

function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}

display();

// Output:
// Surat
// India


// Q2. 

var price2 = 500;

function calculate2() {
    var tax2 = 50;
    console.log(price2 + tax2);
}

calculate2();
console.log(price2);

// Output:
// 550
// 500

// Explanation: price is global, so it can be accessed inside the function. tax is local to calculate2().


// Q3. Identify the scope of each variable.

// college: Global scope
// name: Function scope (student)
// age: Function scope (student)
// subject: Function scope (teacher)

var college3 = "ABC College";

function student3() {
    var name3 = "Rahul";
    var age3 = 20;
}

function teacher3() {
    var subject3 = "JavaScript";
}


// Q4. 

function first4() {
    var number4 = 100;
}

function second4() {
    // console.log(number4); // ReferenceError: number4 is not defined
}

first4();
second4();

// Explanation: number4 is declared inside first4().
// It cannot be accessed inside second4() because it is local to first4().


// Q5. Program demonstrating global and local variables.

var globalValue5 = "I am global";

function showValues5() {
    var localValue5 = "I am local";

    console.log(globalValue5);
    console.log(localValue5);
}

showValues5();
console.log(globalValue5);

// Output:
// I am global
// I am local
// I am global



// Section 2: Global Scope

// Q6. Predict the output.

var game6 = "Cricket";

function play6() {
    console.log("I like " + game6);
}

play6();
console.log(game6);

// Output:
// I like Cricket
// Cricket


// Q7. 

var language7 = "English";

function showLanguage7() {
    console.log(language7);
}

function changeLanguage7() {
    language7 = "Gujarati";
}

showLanguage7();
changeLanguage7();
showLanguage7();
console.log(language7);

// Output:
// English
// Gujarati
// Gujarati

// Explanation: changeLanguage7() changes the global variable. Both functions access the same global variable.


// Q8. Find the error, if any.

function displayMarks8() {
    console.log(marks8);
}

var marks8 = 75;
displayMarks8();

// Output:
// 75

// Explanation: There is no error. The variable is declared before displayMarks8() is called. The function can access the global variable.


// Q9. 

var color9 = "Red";

function showColor9() {
    var message9 = "Favorite color: ";
    console.log(message9 + color9);
}

showColor9();
console.log(color9);

// console.log(message9); // ReferenceError: message9 is not defined

// Output:
// Favorite color: Red
// Red

// Explanation: message9 is local to showColor9().
// It cannot be accessed outside that function.


// Q10. Create and update a global school variable.

var school10 = "Sunrise School";

function showSchool10() {
    console.log(school10);
}

function updateSchool10() {
    school10 = "Green Valley School";
}

showSchool10();
updateSchool10();
showSchool10();
console.log(school10);

// Output:
// Sunrise School
// Green Valley School
// Green Valley School


// Section 3: Function Scope


// Q11. Predict the output.

function calculateTotal11() {
    var first11 = 100;
    var second11 = 200;
    console.log(first11 + second11);
}

calculateTotal11();

// console.log(first11); // ReferenceError: first11 is not defined

// Output:
// 300

// Explanation: first11 is a local variable. It cannot be accessed outside calculateTotal11().


// Q12. Find and explain the error.

function employee12() {
    var salary12 = 30000;
}

employee12();

// console.log(salary12); // ReferenceError: salary12 is not defined

// Explanation: salary12 is declared inside employee12(). It is not accessible outside the function.


// Q13. Predict the output.

var number13 = 15;

function test13() {
    var number13 = 25;
    console.log(number13);
}

test13();
console.log(number13);

// Output:
// 25
// 15

// Explanation: The local number13 is separate from the global number13.
// The local variable shadows the global variable inside the function.


// Q14. Predict the output.

function calculate14() {
    var result14 = 40;
    result14 = result14 + 10;
    console.log(result14);
}

calculate14();
calculate14();

// Output:
// 50
// 50

// Explanation:
// A new local variable is created each time the function is called.
// The local variable does not remain accessible after the function ends.


// Q15. Calculate the area of a rectangle using local variables.

function calculateArea15() {
    var length15 = 8;
    var width15 = 4;

    var area15 = length15 * width15;
    console.log("Area:", area15);
}

calculateArea15();

// Output:
// Area: 32

// Explanation: length15 and width15 are local variables.
// They cannot be accessed outside calculateArea15().


// Section 4: No Block Scope with var


// Q16. Predict the output.

if (10 > 5) {
    var result16 = "Success";
}

console.log(result16);

// Output:
// Success

// Explanation: var does not have block scope. The variable can be accessed outside the if block.


// Q17. Predict the output.

var number17 = 1;

if (true) {
    var number17 = 2;
}

console.log(number17);

// Output:
// 2

// Explanation: Both declarations refer to the same function/global-scoped
// variable because var does not create a separate block scope.


// Q18. Predict the output.

var message18 = "Start";

{
    var message18 = "End";
}

console.log(message18);

// Output:
// End

// Explanation: A standalone block does not create a separate scope for var.
// The second assignment changes the same variable.


// Q19. Predict the output.

if (false) {
    var result19 = 100;
}

console.log(result19);

// Output:
// undefined

// Explanation: The var declaration is hoisted, but the assignment does not
// execute because the condition is false.
// Therefore, result19 exists with the value undefined.


// Q20. Use block scope to protect the secret variable.

if (true) {
    let secret20 = "Hidden";
    console.log(secret20);
}

// console.log(secret20); // ReferenceError: secret20 is not defined

// Output:
// Hidden

// Explanation: let creates block scope.
// secret20 can only be accessed inside the if block.



// Section 5: Block Scope with Loops


// Q21. Predict the complete output.

for (var number21 = 2; number21 <= 6; number21 += 2) {
    console.log(number21);
}

console.log("Final:", number21);

// Output:
// 2
// 4
// 6
// Final: 8

// Explanation: var does not have block scope.
// The loop variable remains accessible after the loop ends.


// Q22. Predict the output.

var count22 = 10;

for (var count22 = 1; count22 <= 3; count22++) {
    console.log(count22);
}

console.log("Count:", count22);

// Output:
// 1
// 2
// 3
// Count: 4

// Explanation: The for loop uses the same count variable.
// Its original value of 10 is replaced by 1.


// Q23. Predict the output.

var i23 = 5;

while (i23 > 2) {
    console.log(i23);
    i23--;
}

console.log("After loop:", i23);

// Output:
// 5
// 4
// 3
// After loop: 2

// Explanation: i23 is declared outside the loop.
// Therefore, it can be accessed after the loop.


// Q24. Find the error, if any.

for (var item24 = 1; item24 <= 3; item24++) {
    console.log("Item:", item24);
}

console.log("Last item:", item24);

// Output:
// Item: 1
// Item: 2
// Item: 3
// Last item: 4

// Explanation: There is no error.
// var allows item24 to be accessed outside the loop.


// Q25. Use block scope for the loop variable.

for (let step25 = 1; step25 <= 4; step25++) {
    console.log(step25);
}

// console.log(step25); // ReferenceError: step25 is not defined

// Output:
// 1
// 2
// 3
// 4

// Explanation: let creates block scope.
// step25 is only accessible inside the for loop.


// Section 6: Function Scope Inside Loops


// Q26. Predict the output.

function calculate26() {
    for (var number26 = 1; number26 <= 3; number26++) {
        console.log(number26 * 10);
    }

    console.log("Final:", number26);
}

calculate26();

// Output:
// 10
// 20
// 30
// Final: 4

// Explanation: number26 is accessible after the loop because var
// does not have block scope. It cannot be accessed outside calculate26()
// because it is function-scoped.


// Q27. Identify which statements cause errors.

function student27() {
    for (var marks27 = 60; marks27 <= 80; marks27 += 10) {
        console.log(marks27);
    }

    console.log(marks27);
}

student27();

// console.log(marks27); // ReferenceError: marks27 is not defined

// Output:
// 60
// 70
// 80
// 90

// Explanation:
// Inside the function, marks27 is accessible because it uses var.
// Outside the function, marks27 cannot be accessed.


// Q28. Predict the output.

function test28() {
    var value28 = 5;

    while (value28 < 8) {
        console.log(value28);
        value28++;
    }

    console.log("Final value:", value28);
}

test28();

// Output:
// 5
// 6
// 7
// Final value: 8

// Explanation: The loop executes 3 times.
// value28 is function-scoped and remains accessible after the loop.


// Q29. Find and explain the error.

function calculate29() {
    for (var i29 = 1; i29 <= 2; i29++) {
        console.log(i29);
    }
}

// console.log(i29); // ReferenceError: i29 is not defined
calculate29();

// Output:
// 1
// 2

// Explanation: i29 is declared inside calculate29().
// It cannot be accessed outside the function.
// The function must be called to execute its loop.


// Q30. Print numbers and demonstrate function scope.

function printNumbers30() {
    for (var number30 = 1; number30 <= 5; number30++) {
        console.log(number30);
    }

    console.log("After loop:", number30);
}

printNumbers30();

// console.log(number30); // ReferenceError: number30 is not defined

// Output:
// 1
// 2
// 3
// 4
// 5
// After loop: 6

// Explanation: number30 is accessible after the loop inside the function.
// It cannot be accessed outside printNumbers30().


// ==================================================
// Section 7: Hoisting with var
// ==================================================

// Q31. Predict the output.

console.log(score31);
var score31 = 90;
console.log(score31);

// Output:
// undefined
// 90

// Explanation: var declarations are hoisted to the top of their scope.
// The declaration is available before assignment, with value undefined.


// Q32. Predict the output.

var a32 = 10;

function test32() {
    console.log(a32);
    var a32 = 20;
    console.log(a32);
}

test32();

// Output:
// undefined
// 20

// Explanation: The local declaration of a32 is hoisted.
// It shadows the global a32 throughout the function.
// Its value is undefined before the assignment.


// Q33. Identify which statements produce undefined.

console.log(first33);
console.log(second33);

var first33 = 100;
var second33 = 200;

console.log(first33);
console.log(second33);

// Output:
// undefined
// undefined
// 100
// 200

// Explanation: Both var declarations are hoisted.
// Their values are undefined until the assignments execute.


// Q34. Predict the output and show hoisting.

function calculate34() {
    console.log(total34);
    var total34 = 50;
    console.log(total34);
}

calculate34();

// Output:
// undefined
// 50

// Hoisted version of the function:

function calculate34Hoisted() {
    var total34Hoisted;
    console.log(total34Hoisted);
    total34Hoisted = 50;
    console.log(total34Hoisted);
}

calculate34Hoisted();

// Output:
// undefined
// 50

// Explanation: The declaration moves to the top of the function scope.
// The assignment stays at its original position.


// Q35. Find and explain the issue.

var price35 = 100;

function showPrice35() {
    console.log(price35);
    var price35 = 500;
}

showPrice35();
console.log(price35);

// Output:
// undefined
// 100

// Explanation:
// The local price35 declaration is hoisted inside showPrice35().
// It shadows the global price35.
// The global variable remains 100.



// Section 8: Function Declaration Hoisting


// Q36. Call a function before its declaration.

sayHello36();

function sayHello36() {
    console.log("Hello from CodingGita");
}

// Output:
// Hello from CodingGita

// Explanation: Function declarations are fully hoisted.
// The function can be called before its declaration.


// Q37. Predict the output.

display37();

function display37() {
    console.log("Function is hoisted completely");
}

// Output:
// Function is hoisted completely

// Explanation: A function declaration is hoisted with its complete body.
// A var variable declaration is hoisted only with an initial value of undefined.


// Q38. Find and explain the issue.

// greet38(); // TypeError: greet38 is not a function

var greet38 = function() {
    console.log("Hi");
};

greet38();

// Output:
// Hi

// Explanation: The var declaration is hoisted, but the function assignment
// is not. Before assignment, greet38 contains undefined.
// Calling it before assignment causes a TypeError.


// Q39. Predict the output.

console.log(typeof myFunc39);

function myFunc39() {
    return "I am hoisted";
}

console.log(myFunc39());

// Output:
// function
// I am hoisted


// Q40. Call a function before its declaration using a global variable.

var message40 = "Welcome to CodingGita";

showMessage40();

function showMessage40() {
    console.log(message40);
}

// Output:
// Welcome to CodingGita

// Explanation: The function declaration is hoisted completely.
// The global variable is also available when the function executes.


// Section 9: Scope Chain


// Q41. Predict the output and explain the lookup process.

var institute41 = "CodingGita";

function department41() {
    var dept41 = "CSE";

    function batch41() {
        var year41 = 2025;

        console.log(year41);
        console.log(dept41);
        console.log(institute41);
    }

    batch41();
}

department41();

// Output:
// 2025
// CSE
// CodingGita

// Explanation:
// First, JavaScript searches inside batch41() for each variable.
// If it is not found, it searches department41().
// Finally, it searches the global scope.


// Q42. Predict the output and identify the error.

var globalVar42 = "I am global";

function outer42() {
    var outerVar42 = "I am outer";

    function inner42() {
        console.log(globalVar42);
        console.log(outerVar42);

        // console.log(innerVar42Value); // ReferenceError: innerVar42Value is not defined
    }

    inner42();
}

outer42();

// Output:
// I am global
// I am outer

// Explanation: inner42() can access globalVar42 and outerVar42.
// innerVar42Value is not declared in any accessible scope,
// so trying to access it causes a ReferenceError.


// Q43. Identify which variables are accessible inside deep().

var a43 = 1;

function level143() {
    var b43 = 2;

    function level243() {
        var c43 = 3;

        function deep43() {
            console.log(a43, b43, c43);
        }

        deep43();
    }

    level243();
}

level143();

// Output:
// 1 2 3

// Explanation: deep43() can access:
// a43 from global scope,
// b43 from level143(),
// c43 from level243().


// Q44. Predict the output.

var x44 = "global";

function first44() {
    var x44 = "first";

    function second44() {
        console.log(x44);
    }

    second44();
}

first44();
console.log(x44);

// Output:
// first
// global

// Explanation: second44() finds x44 in the nearest outer function,
// first44(). The final console.log accesses the global x44.


// Q45. Demonstrate a scope chain with three levels.

var global45 = "Global Variable";

function outer45() {
    var outerValue45 = "Outer Function";

    function middle45() {
        var middleValue45 = "Middle Function";

        function inner45() {
            var innerValue45 = "Inner Function";

            console.log(innerValue45);
            console.log(middleValue45);
            console.log(outerValue45);
            console.log(global45);
        }

        inner45();
    }

    middle45();
}

outer45();

// Output:
// Inner Function
// Middle Function
// Outer Function
// Global Variable

// Explanation: The innermost function can access its own variable,
// variables from its outer functions, and the global variable.


// Section 10: Variable Shadowing


// Q46. Predict the output.

var score46 = 50;

function test46() {
    var score46 = 90;
    console.log(score46);
}

test46();
console.log(score46);

// Output:
// 90
// 50

// Explanation: Shadowing happens when a local variable has the same name
// as a variable in an outer scope. The local variable is used inside the function.


// Q47. Predict the output.

var name47 = "Global Name";

function show47() {
    var name47 = "Local Name";
    console.log(name47);
}

show47();
console.log(name47);

// Output:
// Local Name
// Global Name

// Explanation: The local variable does not permanently change the global one.
// They are two separate variables.


// Q48. Predict the output.

var value48 = 10;

function update48() {
    value48 = 20;
    console.log(value48);
}

update48();
console.log(value48);

// Output:
// 20
// 20

// Explanation: No new variable is declared inside update48().
// JavaScript finds and changes the existing global variable.


// Q49. Predict the complete output.

var color49 = "Blue";

function changeColor49() {
    var color49 = "Red";
    console.log("Inside:", color49);
}

changeColor49();
console.log("Outside:", color49);

// Output:
// Inside: Red
// Outside: Blue

// Explanation: The local color49 shadows the global color49.
// Changing the local variable does not change the global variable.


// Q50. Demonstrate variable shadowing.

var marks50 = 70;

function showMarks50() {
    var marks50 = 95;
    console.log("Inside function:", marks50);
}

showMarks50();
console.log("Outside function:", marks50);

// Output:
// Inside function: 95
// Outside function: 70

// Explanation: The local marks50 shadows the global marks50
// only inside showMarks50().


// Section 11: Nested Functions


// Q51. Predict the output.

function outer51() {
    var teacher51 = "Kartik Sir";

    function inner51() {
        var student51 = "Jenil";

        console.log(student51);
        console.log(teacher51);
    }

    inner51();
}

outer51();

// Output:
// Jenil
// Kartik Sir

// Explanation: inner51() can access teacher51 from outer51().
// teacher51 and student51 cannot be accessed outside outer51().

// console.log(teacher51); // ReferenceError
// console.log(student51); // ReferenceError


// Q52. Predict the output and explain variable accessibility.

function parent52() {
    var a52 = "Parent";

    function child52() {
        var b52 = "Child";

        function grandchild52() {
            var c52 = "Grandchild";

            console.log(a52);
            console.log(b52);
            console.log(c52);
        }

        grandchild52();
    }

    child52();
}

parent52();

// Output:
// Parent
// Child
// Grandchild

// Explanation:
// grandchild52() can access its own c52,
// the parent function's b52,
// and the outer function's a52.


// Q53. Find the errors.

function outer53() {
    var secret53 = "Hidden";

    function inner53() {
        console.log(secret53);
    }

    inner53();
}

outer53();

// Output:
// Hidden

// Explanation: inner53() is declared inside outer53().
// It can only be called from an accessible scope.
// Calling inner53() directly outside outer53() causes a ReferenceError.

// inner53(); // ReferenceError: inner53 is not defined


// Q54. Predict the output.

function createMessage54() {
    var greeting54 = "Hello";

    function show54() {
        console.log(greeting54 + " students");
    }

    return show54;
}

var messageFunc54 = createMessage54();
messageFunc54();

// Output:
// Hello students

// Explanation: The inner function remembers the variables from its
// outer function even after createMessage54() has finished.
// This behavior is called a closure.


// Q55. Create a studentInfo() function with an inner function.

function studentInfo55() {
    var name55 = "Ayush";
    var course55 = "JavaScript";

    function display55() {
        console.log("Name:", name55);
        console.log("Course:", course55);
    }

    display55();
}

studentInfo55();

// Output:
// Name: Ayush
// Course: JavaScript

// Explanation: display55() is an inner function.
// It can access the local variables of studentInfo55().



// Section 12: Common Errors with var


// Q56. Find the problem in the code.

// function test56() {
//     x56 = 100; // Missing var
// }
// test56();
// console.log(x56);

// Expected output in a non-strict script:
// 100

// Explanation: Without var, let, or const, assigning to an undeclared
// variable can create a global variable in non-strict mode.
// This is an unintended side effect.
// In strict mode, it causes a ReferenceError.


// Q57. Predict the output.

if (true) {
    var x57 = 20;
}

console.log(x57);

// Output:
// 20

// Explanation: var does not have block scope.
// Beginners may expect an error because they think the if block
// creates a separate scope for the variable.


// Q58. Predict the output.

console.log(a58);
var a58 = 10;

// Output:
// undefined

// Explanation: The var declaration is hoisted to the top of its scope.
// The assignment happens later, so the first console.log prints undefined.


// Q59. Find the issue.

var x59 = 10;
var x59 = 20;
console.log(x59);

// Output:
// 20

// Explanation: JavaScript allows redeclaration of a variable using var.
// The second declaration and assignment replace the previous value.
// This can become confusing because the same variable name is reused.


// Q60. Rewrite the code to avoid accidentally creating a global variable.

function calculate60() {
    var total60 = 0;

    for (var i60 = 1; i60 <= 5; i60++) {
        total60 = total60 + i60;
    }

    console.log(total60);
}

calculate60();

// console.log(total60); // ReferenceError: total60 is not defined

// Output:
// 15

// Explanation:
// total60 is declared using var inside calculate60().
// It is function-scoped and cannot be accessed outside the function.
// This avoids accidentally creating a global variable.