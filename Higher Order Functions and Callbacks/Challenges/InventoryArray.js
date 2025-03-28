const inventory = [
    { name: "Keyboard", quantity: 4, price: 79.99 },
    { name: "Mouse", quantity: 10, price: 25.49 },
    { name: "Monitor", quantity: 3, price: 199.99 },
    { name: "USB Cable", quantity: 20, price: 5.99 }
];

const totalValueOfInventory = inventory.reduce((accumulator, item) => {
    const totalAmount = item.quantity * item.price;
    return accumulator += totalAmount;
}, 0)

console.log(totalValueOfInventory.toFixed(2));