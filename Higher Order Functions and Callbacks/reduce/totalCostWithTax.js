const prices = [
    10.15, 25.20, 65.21, 56.86, 5.96, 9.21, 34.65
];

const tax = 0.05;

const totalPriceWithTax = prices.reduce((accumulator, currentValue) => {
    return accumulator += (currentValue * tax ) + currentValue;
});


console.log(totalPriceWithTax.toFixed(2));

