/*
You’re building an e-commerce site. You’re given a shopping cart array, where each item has:

name (string)

price (number)

quantity (number)

Write a function validateCart(cart) that checks each item and returns a new array of invalid items — items are invalid if:

price is not a number or is less than or equal to 0

quantity is not an integer or is less than 1
 */
const cart = [
  { name: "Laptop", price: 1299, quantity: 1 },
  { name: "Mouse", price: 0, quantity: 2 },
  { name: "Keyboard", price: 59.99, quantity: 0 },
  { name: "Monitor", price: "free", quantity: 1 },
  { name: "Headphones", price: 89.99, quantity: 2 },
];

function validateCart(cart) {
  const invalidItems = cart.filter((item) => {
    const badPrice = typeof item.price !== "number" || item.price <= 0;
    const badQty = !Number.isInteger(item.quantity) || item.quantity < 1;
    return badPrice || badQty;
  });

  return invalidItems;
}
console.log(validateCart(cart));
