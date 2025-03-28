// Given an array of prices, return an array with 10% tax added to each.

const prices = [
    10.50, 20.10, 25.86, 100.15, 95.25
];

const tax = 0.10;
const pricesWithTax = prices.map((price) => {
    const taxedMoney = price * tax;
    return (price + taxedMoney).toFixed(2);
})

console.log(pricesWithTax);