/*
RangeError

Create a function named checkRange that takes a number and throws a RangeError if the number is less than 0 or greater than 100. 
Call the function with different values inside a try-catch block and log the error's name and message properties to the console.
*/

function checkRange(number) {
    if (number < 0 || number > 100) {
        throw new RangeError("Numbers must be within 0 to 100");
    }
    return number;
}

try {
    let result = checkRange(10);
    console.log(result);
} catch (e) {
    console.error(e.name + ", " + e.message);
}