var value;

// Test with value 0
value = 0;
if (value) {
    console.log("0 is truthy.");
} else {
    console.log("0 is falsy.");
}

// Test with value 1
value = 1;
if (value) {
    console.log("1 is truthy.");
} else {
    console.log("1 is falsy.");
}

// Test with an empty string
value = "";
if (value) {
    console.log('"" is truthy.');
} else {
    console.log('"" is falsy.');
}

// Test with a non-empty string
value = "hello";
if (value) {
    console.log('"hello" is truthy.');
} else {
    console.log('"hello" is falsy.');
}

// Test with null
value = null;
if (value) {
    console.log("null is truthy.");
} else {
    console.log("null is falsy.");
}

// Test with undefined
value = undefined;
if (value) {
    console.log("undefined is truthy.");
} else {
    console.log("undefined is falsy.");
}

// Test with NaN
value = NaN;
if (value) {
    console.log("NaN is truthy.");
} else {
    console.log("NaN is falsy.");
}
