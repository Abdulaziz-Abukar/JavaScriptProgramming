/*
Combined Comparison and Logical Operators

Create variables a, b, and c with values 5, 10, and 15, respectively. 
Use a combination of comparison and logical operators to check if a is less than b and b is less than c, or if c is greater than a. Log the result to the console. 
*/

var a = 5;
var b = 10;
var c = 15;

if ((a < b && b < c) || (c > a)) {
    console.log("The conditions are met.");
} else {
    console.log("The conditions are not met.");
}
