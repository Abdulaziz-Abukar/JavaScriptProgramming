// 1. Expceptions and Try-Catch

try {
    // Code that may throw an error.
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Code to handle the error.
    console.error("An error occured:", error.message);
}

// 2. Throw

function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be at least 18 years old.")
    }
    return "Access Granted";
}

try {
    let result = checkAge(16);
    console.log(result);
} catch (error) {
    console.error("An error occured:", error.message);
}

// 3. Finally

try {
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This will always run");
}
