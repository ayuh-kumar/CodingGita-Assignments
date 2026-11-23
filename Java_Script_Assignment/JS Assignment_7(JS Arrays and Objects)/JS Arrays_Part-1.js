// JavaScript Assignment: Arrays in JavaScript




//#1: What Is an Array?


// Q1.
// An array is a special variable that can store multiple values
// in a single variable.

// Q2. The position of a value inside an array is called its index.

// Q3. Array indexing always starts from 0.

// Q4. Given numbers = [10, 20, 30, 40]
// Index 2 contains 30.

// Q5. The index of 40 is 3.

var numbers1 = [10, 20, 30, 40];

console.log(numbers1[2]); // Output: 30
console.log(numbers1.indexOf(40)); // Output: 3


//#2: Creating Arrays


// Q1. Two ways to create an array:

// 1. Array literal: var arr = [10, 20, 30];
// 2. Array constructor: var arr = new Array(10, 20, 30);

// Q2. Array literal is the recommended method.

// Q3. Create students array using array literal.

var students2 = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
console.log(students2);

// Q4. Create marks array using Array constructor.

var marks2 = new Array(85, 90, 78);
console.log(marks2);

// Q5. The new keyword is used with the Array constructor.


//#3: Accessing Values in an Array

// Q1. Square brackets [] are used to access array elements.

// Q2, Q3, Q4 and Q5.

var students3 = ["Jenil", "Mahir", "Priyesha"];

console.log(students3[0]); // Output: Jenil
console.log(students3[2]); // Output: Priyesha
console.log(students3[10]); // Output: undefined

var colors3 = ["Red", "Blue", "Green"];
console.log(colors3[0]); // Output: Red

// Explanation: If an index does not exist, JavaScript returns undefined.


// #4: Updating Values

// Q1. We can update an array element by assigning a new value
// to its index.

// Q2. Change the second element from 75 to 95.

var marks4 = [80, 75, 90];

marks4[1] = 95;

// Q3. Print the updated array.

console.log(marks4);

// Output:
// [80, 95, 90]

// Q4. False.
// We do not need a special update() method.
// We can directly assign a new value using its index.

// Q5. Yes, we can assign a value at an index outside the current bounds.
// JavaScript increases the array length and leaves empty slots
// between the previous elements and the new index.

var numbers4 = [10, 20];
numbers4[5] = 60;

console.log(numbers4);
console.log(numbers4.length);

// Output:
// [10, 20, empty × 3, 60] (display may vary)
// 6


// #5: Array Length

// Q1. The built-in property is length.

// Q2. Output is 4.

// Q3. An empty array has length 0.

// Q4. length helps us know the number of elements and
// is useful for controlling loops.

// Q5. length is a property, not a function.

var arr5 = [1, 2, 3, 4];

console.log(arr5.length); // Output: 4

var emptyArray5 = [];
console.log(emptyArray5.length); // Output: 0


// # 6: Looping Through Arrays

// Q1. The two loops demonstrated are for and while loops.

// Q2. The typical condition is i < array.length.

// Q3. In the while loop, i++ is placed after the array access.

// Q4. Print every element using a for loop.

var students6 = ["Jenil", "Mahir", "Priyesha"];

for (var i6 = 0; i6 < students6.length; i6++) {
    console.log(students6[i6]);
}

// Output:
// Jenil
// Mahir
// Priyesha

// Q5. Using <= instead of < causes one extra iteration.
// The extra iteration accesses an invalid index and returns undefined.

// Q6. Print every element using for...of.

var subject6 = ["JavaScript", "Python", "HTML"];

for (var subjectName6 of subject6) {
    console.log(subjectName6);
}

// Output:
// JavaScript
// Python
// HTML

// Q7. Advantage of for...of:
// It directly gives the values without needing an index variable.

// Q8. Given code has syntax errors and an incorrect indexOf() call.
// indexOf() belongs to the array, not a standalone function.
// Also, the closing parenthesis is missing.

// Original incorrect line:
// console.log(color, indexOf(color);

// Corrected code:

const colors6 = ["Red", "Blue", "Green"];

for (const color6 of colors6) {
    console.log(color6, colors6.indexOf(color6));
}

// Output:
// Red 0
// Blue 1
// Green 2


//#7: Adding Elements to Arrays

// Q1. push() adds an element at the end.

// Q2. unshift() adds an element at the beginning.

// Q3. Add 4 at the end.

let nums7 = [1, 2, 3];

nums7.push(4);
console.log(nums7);

// Output:
// [1, 2, 3, 4]

// Q4. Add 0 at the beginning.

nums7.unshift(0);
console.log(nums7);

// Output:
// [0, 1, 2, 3, 4]

// Q5. True.
// push() and unshift() modify the original array.


//# 8: Removing Elements

// Q1. pop() removes the last element.

// Q2. shift() removes the first element.

// Q3. Remove the last element.

let nums8 = [100, 200, 300, 400, 500];

nums8.pop();
console.log(nums8);

// Output:
// [100, 200, 300, 400]

// Q4. Remove the first element.

nums8.shift();
console.log(nums8);

// Output:
// [200, 300, 400]

// Q5. pop() and shift() both return the removed element
// and also modify the original array.


//# 9: Searching in Arrays

// Q1. indexOf() returns the index when the value is found.

// Q2. It returns -1 when the value is not found.

// Q3 and Q4.

const names9 = ["Jenil", "Mahir", "Arjun"];

console.log(names9.indexOf("Mahir")); // Output: 1
console.log(names9.indexOf("Krishna")); // Output: -1

// Q5. Find the index of Priyesha.

var students9 = ["Jenil", "Mahir", "Priyesha"];

console.log(students9.indexOf("Priyesha")); // Output: 2


//#10: Array with Different Data Types

// Q1. Yes, JavaScript arrays can store different data types.

// Q2. Create an array containing number, string, boolean and null.

const data10 = [100, "Hello", true, null];

// Q3. Use typeof to check the data type of each element.

console.log(typeof data10[0]);
console.log(typeof data10[1]);
console.log(typeof data10[2]);
console.log(typeof data10[3]);

// Output:
// number
// string
// boolean
// object

// Q4. typeof data10[0] returns "number".

// Q5. typeof data10[2] returns "boolean".

// Note: typeof null returns "object" in JavaScript.


//# 11: Array of Arrays (Matrix) - 2D Arrays

// Q1. Create a 4x2 matrix and print all elements of the second column.

var matrix11A = [
    [10, 20],
    [30, 40],
    [50, 60],
    [70, 80]
];

for (var i11A = 0; i11A < matrix11A.length; i11A++) {
    console.log(matrix11A[i11A][1]);
}

// Output:
// 20
// 40
// 60
// 80

// Explanation: The second column has index 1.
// The outer loop moves through each row.


// Q2. Print only the marks of the third student.

const marks11B = [
    [85, 90, 78],
    [70, 75, 80],
    [88, 82, 95],
    [60, 65, 70]
];

for (var i11B = 0; i11B < marks11B[2].length; i11B++) {
    console.log(marks11B[2][i11B]);
}

// Output:
// 88
// 82
// 95

// Explanation: The third student is at row index 2.


// Q3. Find the total number of elements in a 3x4 matrix.

var matrix11C = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

var totalElements11C = 0;

for (var i11C = 0; i11C < matrix11C.length; i11C++) {
    totalElements11C = totalElements11C + matrix11C[i11C].length;
}

console.log("Total elements:", totalElements11C);

// Output:
// Total elements: 12


// Q4. Create a 3x3 matrix, update the center element to 0 and print it.

var matrix11D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix11D[1][1] = 0;

for (var i11D = 0; i11D < matrix11D.length; i11D++) {
    console.log(matrix11D[i11D]);
}

// Output:
// [1, 2, 3]
// [4, 0, 6]
// [7, 8, 9]


// Q5. Print the first row and last column element of a 3x3 matrix.

var matrix11E = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];

console.log(matrix11E[0][2]);

// Output:
// 33

// Explanation: First row index = 0.
// Last column index = 2.


//# 12: Real-World Example

const marks12 = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

for (let i12 = 0; i12 < marks12.length; i12++) {
    const studentMarks12 = marks12[i12];
    const total12 = studentMarks12[0] + studentMarks12[1] + studentMarks12[2];
    const avg12 = total12 / 3;

    console.log("Student " + (i12 + 1) + " average: " + avg12);
}

// Output:
// Student 1 average: 89
// Student 2 average: 75
// Student 3 average: 86.33333333333333


// Q1. marks[i] represents the complete array of marks of one student.

// Q2. marks.length automatically gives the number of students.
// It avoids hard-coding the number 3.

// Q3. If a student has only 2 subject marks, the third value will be
// undefined. Adding undefined to numbers produces NaN.
// Therefore, the average calculation will also produce NaN.


//# Common Mistakes

// Q1. Accessing an invalid index.

const arr13A = [10, 20, 30];

console.log(arr13A[3]);

// Output:
// undefined

// Explanation: Valid indexes are 0, 1 and 2.
// Index 3 does not exist.


// Q3. Is arr[arr.length] = 10 wrong?

// Actually, this code is valid and adds 10 at the end of the array.
// However, using push() is generally clearer and recommended.

var arr13B = [10, 20, 30];

arr13B[arr13B.length] = 10;
console.log(arr13B);

// Output:
// [10, 20, 30, 10]


// Q4. Change the third element from 30 to 40.

let arr13C = [10, 20, 30];

arr13C[2] = 40;

console.log(arr13C);

// Output:
// [10, 20, 40]

// Explanation: The question asks to replace 30 with 40,
// so we update index 2 instead of adding another element.
// If the intention was to append 40, use arr13C.push(40).


// Q5. A sparse array is an array that has empty slots between elements.
// Example:

var sparse13 = [10, 20];
sparse13[5] = 60;

console.log(sparse13);

// Output:
// [10, 20, empty × 3, 60] (display may vary)

// Q6. False.
// Accessing an invalid index does not throw an error.
// It returns undefined.

// Q7. One key difference:
// An array stores ordered values using numerical indexes.
// An object stores data using named properties or keys.


//# 14: Practice Exercises

// Q1. Print only even numbers.

const numbers14A = [12, 7, 18, 25, 4, 9, 30];

for (var i14A = 0; i14A < numbers14A.length; i14A++) {
    if (numbers14A[i14A] % 2 === 0) {
        console.log(numbers14A[i14A]);
    }
}

// Output:
// 12
// 18
// 4
// 30


// Q2. Print city names in reverse order.

const cities14B = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

for (var i14B = cities14B.length - 1; i14B >= 0; i14B--) {
    console.log(cities14B[i14B]);
}

// Output:
// Bhavnagar
// Vadodara
// Rajkot
// Surat
// Ahmedabad


// Q3. Find the second largest number.

const scores14C = [12, 45, 7, 89, 23];

var largest14C = scores14C[0];
var secondLargest14C = -Infinity;

for (var i14C = 1; i14C < scores14C.length; i14C++) {
    if (scores14C[i14C] > largest14C) {
        secondLargest14C = largest14C;
        largest14C = scores14C[i14C];
    } else if (scores14C[i14C] > secondLargest14C) {
        secondLargest14C = scores14C[i14C];
    }
}

console.log("Second largest:", secondLargest14C);

// Output:
// Second largest: 45


// Q4. Add Purple at the end and Black at the beginning.

const colors14D = ["Red", "Blue", "Green", "Yellow"];

colors14D.push("Purple");
colors14D.unshift("Black");

console.log(colors14D);

// Output:
// ["Black", "Red", "Blue", "Green", "Yellow", "Purple"]


// Q5. Calculate the sum of all elements in a matrix.

const matrix14E = [
    [10, 20, 30],
    [40, 50, 60]
];

var sum14E = 0;

for (var i14E = 0; i14E < matrix14E.length; i14E++) {
    for (var j14E = 0; j14E < matrix14E[i14E].length; j14E++) {
        sum14E = sum14E + matrix14E[i14E][j14E];
    }
}

console.log("Sum:", sum14E);

// Output:
// Sum: 210


// Q6. Count how many marks are greater than 50.

const marks14F = [45, 67, 89, 32, 76, 91, 54];

var count14F = 0;

for (var i14F = 0; i14F < marks14F.length; i14F++) {
    if (marks14F[i14F] > 50) {
        count14F++;
    }
}

console.log("Numbers greater than 50:", count14F);

// Output:
// Numbers greater than 50: 5


// Q7. Print the main diagonal elements of a matrix.

const matrix14G = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i14G = 0; i14G < matrix14G.length; i14G++) {
    console.log(matrix14G[i14G][i14G]);
}

// Output:
// 1
// 5
// 9


//#15: Multiple Choice Questions

// Q1. Correct answer: d) 20

const arr15A = [5, 10, 15, 20];
console.log(arr15A[arr15A.length - 1]);

// Output: 20
// Explanation: length - 1 gives the last valid index.


// Q2. Correct answer: c) arr.unshift(5)

// Explanation: unshift() adds an element at the beginning.


// Q3. Correct answer: c) -1

const fruits15C = ["Apple", "Banana", "Mango"];
console.log(fruits15C.indexOf("Orange"));

// Output: -1
// Explanation: Orange is not present in the array.


// Q4. Correct answer: c) Arrays can store mixed data types.


// Q5. Correct answer: b) [1, 2, 4]

let nums15E = [1, 2, 3];

nums15E.pop();
nums15E.push(4);

console.log(nums15E);

// Output:
// [1, 2, 4]


// Q6. Correct answer: d) 60

const matrix15F = [
    [10, 20],
    [30, 40],
    [50, 60]
];

console.log(matrix15F[2][1]);

// Output: 60


// Q7. Correct answer: b) string

const data15G = [10, "Hello", false];

console.log(typeof data15G[1]);

// Output:
// string


//#16-A: Mini Assignment 1: Shopping Cart Calculator

const cart16A = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];

var grandTotal16A = 0;

for (var i16A = 0; i16A < cart16A.length; i16A++) {
    var productName16A = cart16A[i16A][0];
    var price16A = cart16A[i16A][1];
    var quantity16A = cart16A[i16A][2];

    var itemTotal16A = price16A * quantity16A;

    console.log("Product:", productName16A);
    console.log("Price:", price16A);
    console.log("Quantity:", quantity16A);
    console.log("Item Total:", itemTotal16A);
    console.log("--------------------");

    grandTotal16A = grandTotal16A + itemTotal16A;
}

console.log("Grand Total:", grandTotal16A);

var discount16A = 0;

if (grandTotal16A > 50000) {
    discount16A = grandTotal16A * 10 / 100;
}

var finalAmount16A = grandTotal16A - discount16A;

console.log("Discount:", discount16A);
console.log("Final Payable Amount:", finalAmount16A);

// Output:
// Product: Laptop
// Price: 45000
// Quantity: 1
// Item Total: 45000
// --------------------
// Product: Mouse
// Price: 800
// Quantity: 2
// Item Total: 1600
// --------------------
// Product: Keyboard
// Price: 1500
// Quantity: 1
// Item Total: 1500
// --------------------
// Product: Headphones
// Price: 2500
// Quantity: 1
// Item Total: 2500
// --------------------
// Grand Total: 50600
// Discount: 5060
// Final Payable Amount: 45540


// #16-B: Mini Assignment 2: Classroom Attendance Tracker

const attendance16B = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];

var highestAttendance16B = -1;
var highestStudent16B = "";

for (var i16B = 0; i16B < attendance16B.length; i16B++) {
    var studentName16B = attendance16B[i16B][0];
    var studentAttendance16B = attendance16B[i16B][1];

    var present16B = 0;
    var absent16B = 0;

    for (var j16B = 0; j16B < studentAttendance16B.length; j16B++) {
        if (studentAttendance16B[j16B] === "P") {
            present16B++;
        } else if (studentAttendance16B[j16B] === "A") {
            absent16B++;
        }
    }

    var percentage16B = present16B / studentAttendance16B.length * 100;

    var status16B;

    if (percentage16B >= 75) {
        status16B = "Good";
    } else {
        status16B = "Low Attendance";
    }

    console.log("Name:", studentName16B);
    console.log("Present:", present16B);
    console.log("Absent:", absent16B);
    console.log("Attendance:", percentage16B + "%");
    console.log("Status:", status16B);
    console.log("--------------------");

    if (percentage16B > highestAttendance16B) {
        highestAttendance16B = percentage16B;
        highestStudent16B = studentName16B;
    }
}

console.log("Highest Attendance:", highestStudent16B);
console.log("Highest Percentage:", highestAttendance16B + "%");

// Output:
// Name: Jenil
// Present: 4
// Absent: 1
// Attendance: 80%
// Status: Good
// --------------------
// Name: Mahir
// Present: 3
// Absent: 2
// Attendance: 60%
// Status: Low Attendance
// --------------------
// Name: Yashvi
// Present: 5
// Absent: 0
// Attendance: 100%
// Status: Good
// --------------------
// Name: Arjun
// Present: 2
// Absent: 3
// Attendance: 40%
// Status: Low Attendance
// --------------------
// Highest Attendance: Yashvi
// Highest Percentage: 100%


//# 16-C: Mini Assignment 3: Movie Rating Analyzer

const movies16C = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];

var highestAverage16C = -1;
var highestMovie16C = "";

for (var i16C = 0; i16C < movies16C.length; i16C++) {
    var movieName16C = movies16C[i16C][0];
    var ratings16C = movies16C[i16C][1];

    var totalRating16C = 0;

    for (var j16C = 0; j16C < ratings16C.length; j16C++) {
        totalRating16C = totalRating16C + ratings16C[j16C];
    }

    var averageRating16C = totalRating16C / ratings16C.length;

    var verdict16C;

    if (averageRating16C >= 9) {
        verdict16C = "Excellent";
    } else if (averageRating16C >= 7) {
        verdict16C = "Good";
    } else {
        verdict16C = "Average";
    }

    console.log("Movie:", movieName16C);
    console.log("Ratings:", ratings16C[0], ratings16C[1], ratings16C[2], ratings16C[3], ratings16C[4]);
    console.log("Average Rating:", averageRating16C);
    console.log("Verdict:", verdict16C);
    console.log("--------------------");

    if (averageRating16C > highestAverage16C) {
        highestAverage16C = averageRating16C;
        highestMovie16C = movieName16C;
    }
}

console.log("Highest Rated Movie:", highestMovie16C);
console.log("Highest Average:", highestAverage16C);

// Output:
// Movie: Inception
// Ratings: 9 8 9 10 8
// Average Rating: 8.8
// Verdict: Good
// --------------------
// Movie: Avatar
// Ratings: 7 8 7 6 8
// Average Rating: 7.2
// Verdict: Good
// --------------------
// Movie: Interstellar
// Ratings: 10 9 9 10 9
// Average Rating: 9.4
// Verdict: Excellent
// --------------------
// Movie: Joker
// Ratings: 8 7 8 9 8
// Average Rating: 8
// Verdict: Good
// --------------------
// Highest Rated Movie: Interstellar
// Highest Average: 9.4


//# 16-D: Mini Assignment 4: Temperature of the Week

const temperatures16D = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

var highestTemperature16D = temperatures16D[0][1];
var highestDay16D = temperatures16D[0][0];

var lowestTemperature16D = temperatures16D[0][1];
var lowestDay16D = temperatures16D[0][0];

var totalTemperature16D = 0;

for (var i16D = 0; i16D < temperatures16D.length; i16D++) {
    var day16D = temperatures16D[i16D][0];
    var temperature16D = temperatures16D[i16D][1];

    console.log(day16D + ":", temperature16D + "°C");

    totalTemperature16D = totalTemperature16D + temperature16D;

    if (temperature16D > highestTemperature16D) {
        highestTemperature16D = temperature16D;
        highestDay16D = day16D;
    }

    if (temperature16D < lowestTemperature16D) {
        lowestTemperature16D = temperature16D;
        lowestDay16D = day16D;
    }

    if (temperature16D >= 35) {
        console.log("Heat Alert on " + day16D);
    }
}

var averageTemperature16D = totalTemperature16D / temperatures16D.length;

console.log("--------------------");
console.log("Highest Temperature:", highestTemperature16D + "°C");
console.log("Highest Day:", highestDay16D);

console.log("Lowest Temperature:", lowestTemperature16D + "°C");
console.log("Lowest Day:", lowestDay16D);

console.log("Average Temperature:", averageTemperature16D + "°C");

// Output:
// Monday: 32°C
// Tuesday: 35°C
// Heat Alert on Tuesday
// Wednesday: 30°C
// Thursday: 28°C
// Friday: 33°C
// Saturday: 36°C
// Heat Alert on Saturday
// Sunday: 31°C
// --------------------
// Highest Temperature: 36°C
// Highest Day: Saturday
// Lowest Temperature: 28°C
// Lowest Day: Thursday
// Average Temperature: 32.142857142857146°C


