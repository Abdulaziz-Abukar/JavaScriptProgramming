/*
You’re given an array of product objects. Each product has:

id (number)

name (string)

price (number)

Write a function getTopNProducts(products, n) that returns an array of the top n most expensive products, sorted by price descending.

Return the full product objects, not just names or prices.
*/

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Mouse", price: 50 },
];

function getTopNProducts(products, n) {
  try {
    if (products.length < n) {
      throw new Error("Not enough products");
    }

    products.sort((a, b) => b.price - a.price);

    return products.slice(0, n);
  } catch (err) {
    return err.message;
  }
}

console.log(getTopNProducts(products, 20));
