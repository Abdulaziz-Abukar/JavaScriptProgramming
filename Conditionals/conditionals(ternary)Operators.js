/*
Conditional (Ternary) Operator

Create a variable score with a value between 0 and 100. Use the conditional (ternary) operator to assign a grade based on the score:
"A" for scores 90 and above,
"B" for scores 80-89,
"C" for scores 70-79,
"D" for scores 60-69,
"F" for scores below 60.
Log the grade to the console.
*/

var score = 85; // Example score, you can change this value to test different scenarios

var grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" :
            "F";

console.log("The grade is: " + grade);
