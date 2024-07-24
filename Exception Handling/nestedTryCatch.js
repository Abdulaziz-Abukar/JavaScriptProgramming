/*
Nested Try-Catch

Create a nested try-catch block where the inner try block throws an error, and the outer try block catches it. 
Log appropriate messages to the console in each catch block and the finally block.
*/


try {
    console.log("Outer try block starts.");

    try {
        console.log("Inner try block starts.");
        // Throwing an error in the inner try block
        throw new Error("An error occurred in the inner try block.");
    } catch (innerError) {
        console.error("Caught an error in the inner catch block:", innerError.message);
        // Rethrowing the error to be caught by the outer catch block
        throw innerError;
    } finally {
        console.log("Inner finally block executed.");
    }

} catch (outerError) {
    console.error("Caught an error in the outer catch block:", outerError.message);
} finally {
    console.log("Outer finally block executed.");
}
