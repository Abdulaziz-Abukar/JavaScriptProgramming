function simulateInternalError() {
    try {
        function recursiveFunction() {
            return recursiveFunction();
        }
        recursiveFunction();
    } catch (error) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
    }
}

simulateInternalError();
