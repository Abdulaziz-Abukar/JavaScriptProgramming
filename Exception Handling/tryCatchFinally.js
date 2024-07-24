/*
Try-Catch-Finally

Create a function named fetchData that simulates fetching data from a server (use setTimeout to simulate a delay). 
Use a try-catch-finally block to handle potential errors and always log "Operation completed" in the finally block.
*/


function fetchData(data) {
    if (isNaN(data)) {
        throw new Error("Data must be a string");
    }
    return `${data}, Got it!`;
}

setTimeout(() => {
    try {
        let result = fetchData("2445");
        console.log(result);
    } catch (error) {
        console.error("Error occurred:", error.message);
    } finally {
        console.log("Operation complete.");
    }
}, 5000);
