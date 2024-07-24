/*
TypeError

Create a function named callMethod that takes an object and attempts to call a method named run on it. 
If the object is null or the method doesn't exist, throw a TypeError. 
Call the function with different values inside a try-catch block and log the error's name and message properties to the console.
*/

function callMethod(obj) {
    if (obj === null || typeof obj.run !== 'function') {
        throw new TypeError("The object is null or the method 'run' does not exist.");
    }
    obj.run();
}

try {
    // Case 1: Valid object with run method
    const validObj = {
        run: function() {
            console.log("run method called successfully.");
        }
    };
    callMethod(validObj);

    // Case 2: Object without run method
    const objWithoutRun = {};
    callMethod(objWithoutRun);

} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}

try {
    // Case 3: null object
    const nullObj = null;
    callMethod(nullObj);

} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}

try {
    // Case 4: Object with run method, but not a function
    const objWithInvalidRun = {
        run: "This is not a function"
    };
    callMethod(objWithInvalidRun);

} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}

