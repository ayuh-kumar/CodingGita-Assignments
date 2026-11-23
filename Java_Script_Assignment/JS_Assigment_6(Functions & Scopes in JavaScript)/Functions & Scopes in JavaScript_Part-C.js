
// // Section 8: Function Scope

// // Q1. Create a function showCity with a local variable.
// // Answer: A local variable can only be accessed inside its function.

// function showCity() {
//     let city = "Ahmedabad";
//     console.log(city);
// }

// showCity();
// // Output: Ahmedabad

// // console.log(city);
// // Error: ReferenceError: city is not defined
// // Explanation: city is a local variable, so it cannot be accessed outside the function.


// // Q2. Declare a global variable trainer.
// // Answer: A global variable can be accessed both inside and outside functions.

// let trainer = "CodingGita Mentor";

// function displayTrainer() {
//     console.log(trainer);
// }

// displayTrainer();
// console.log(trainer);
// // Output:
// // CodingGita Mentor
// // CodingGita Mentor


// // Q3. Create a function demoScope with a local variable.
// // Answer: The variable value is available only inside demoScope.

// function demoScope() {
//     let value = 50;
//     console.log(value);
// }

// demoScope();
// // Output: 50

// // console.log(value);
// // Error: ReferenceError: value is not defined
// // Explanation: value is declared inside the function, so it is not available outside.


// // Q4. Why can't a local variable be used outside a function?
// // Answer: JavaScript follows function scope to protect local variables. It prevents unwanted changes and avoids conflicts with other variables. This makes programs safer and easier to manage.


// // Q5. What happens if global and local variables have the same name?
// // Answer: The function uses the local variable because it has priority inside that function.

// let number = 100;

// function showNumber() {
//     let number = 50;
//     console.log(number);
// }

// showNumber();
// console.log(number);
// // Output:
// // 50
// // 100
// // Explanation: The local variable hides the global variable inside the function.


// // Section 9: Combining Function Concepts

// // Q1. Generate a message based on student marks.
// // Answer: The function uses parameters, conditions and return together.

// function generateMessage(name, score) {
//     let result;

//     if (score >= 40) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//     return name + " has scored " + score + " and the result is " + result;
// }

// console.log(generateMessage("Aarav", 65));
// // Output: Aarav has scored 65 and the result is Pass


// // Q2. Create a billCalculator function.
// // Answer: The function calculates the total and checks discount eligibility.

// function billCalculator(item1, item2, item3) {
//     let total = item1 + item2 + item3;

//     if (total >= 1000) {
//         return "Total = ₹" + total + " | Discount Applied";
//     } else {
//         return "Total = ₹" + total + " | No Discount";
//     }
// }

// console.log(billCalculator(400, 350, 300));
// console.log(billCalculator(200, 150, 100));
// // Output:
// // Total = ₹1050 | Discount Applied
// // Total = ₹450 | No Discount


// // Q3. Create a performanceReport function.
// // Answer: The function calculates total, average and performance remark.

// function performanceReport(student, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     let remark;

//     if (average >= 80) {
//         remark = "Excellent";
//     } else {
//         remark = "Keep Improving";
//     }

//     return "Name: " + student +
//         ", Total: " + total +
//         ", Average: " + average +
//         ", Remark: " + remark;
// }

// console.log(performanceReport("Rahul", 85, 90, 80));
// // Output: Name: Rahul, Total: 255, Average: 85, Remark: Excellent


// // Q4. Why perform multiple related tasks inside one function?
// // Answer: It keeps related operations together and makes code easier to understand, reuse and maintain.
// // Example: A bill function can calculate the total, apply a discount and return the final bill in one place.


// // Q5. How do parameters, return and conditions improve code quality?
// // Answer:
// // Parameters make functions reusable with different values.
// // Conditions help make decisions.
// // Return gives back the final result.
// // Together, they make code organized, reusable and easy to maintain.


// // Section 10: Nested Functions

// // Q1. Create mainTask with an inner function helperTask.
// // Answer: A nested function is a function declared inside another function.

// function mainTask() {
//     function helperTask() {
//         return "Task completed successfully";
//     }

//     return helperTask();
// }

// console.log(mainTask());
// // Output: Task completed successfully


// // Q2. Create calculateFinal with an inner function getTotal.
// // Answer: The inner function adds marks and the outer function returns the final message.

// function calculateFinal(m1, m2) {
//     function getTotal() {
//         return m1 + m2;
//     }

//     return "Final marks = " + getTotal();
// }

// console.log(calculateFinal(80, 90));
// // Output: Final marks = 170


// // Q3. Create studentStatus with an inner function getGrade.
// // Answer: The inner function checks marks and returns a grade.

// function studentStatus(name, marks) {
//     function getGrade() {
//         if (marks >= 80) {
//             return "A";
//         } else if (marks >= 60) {
//             return "B";
//         } else {
//             return "C";
//         }
//     }

//     return name + " has received grade " + getGrade();
// }

// console.log(studentStatus("Aarav", 85));
// // Output: Aarav has received grade A


// // Q4. What is the main advantage of nested functions?
// // Answer: Nested functions keep helper functions private inside the outer function.
// // They are useful when a small task is needed only by one function.


// // Q5. Can an inner function access outer variables?
// // Answer: Yes, an inner function can access variables of its outer function.
// // But the outer function cannot directly access variables declared inside the inner function.

// function outerFunction() {
//     let outerValue = 100;

//     function innerFunction() {
//         let innerValue = 50;
//         console.log(outerValue);
//         console.log(innerValue);
//     }

//     innerFunction();
//     // console.log(innerValue);
//     // Error: ReferenceError: innerValue is not defined
// }

// outerFunction();
// // Output:
// // 100
// // 50