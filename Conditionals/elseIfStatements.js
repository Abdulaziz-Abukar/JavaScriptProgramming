/* Else-if Statement

Create a variable marks with an integer value. Use if, else if, and else statements to print:
"Excellent" if marks are 90 or above,
"Good" if marks are between 70 and 89,
"Average" if marks are between 50 and 69,
"Fail" if marks are below 50. */

var marks = 49;

if (marks >= 90) {
    console.log("Excellent");
} 
else if (marks >= 70 && marks <= 89) {
    console.log("Good");
}
else if (marks >= 50 && marks <= 69) {
    console.log("Average")
}
else {
    console.log("Fail")
}