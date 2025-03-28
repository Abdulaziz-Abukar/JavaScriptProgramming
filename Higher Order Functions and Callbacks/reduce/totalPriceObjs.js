const prices = [
    {price: 12.15},
    {price: 15.66},
    {price: 90.35},
    {price: 5.21},
    {price: 96.86},
    {price: 55.43},
    {price: 100.93}
];

const sumPrices = prices.reduce((accumulator, currentPrice) => {
    return accumulator += currentPrice.price;
}, 0)

console.log(sumPrices)