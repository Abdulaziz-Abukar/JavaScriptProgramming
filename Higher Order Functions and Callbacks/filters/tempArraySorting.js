// Given an array of temperatures, return only values below 0 (freezing).

const temperatures = [
    15, 5, -5, -2, -7, 2, 0, 20, 7, 3, -10, -40
];

const tempsBelowZero = temperatures.filter((temp) => { 
    return temp < 0;    
}).sort((a, b) => b - a);

console.log(tempsBelowZero);