/*
🧠 Coding Challenge: Merge Product Inventory
Prompt:

You are given two arrays of products:

One array contains the product details (name and price).

Another contains inventory counts for each product by name.

Write a function mergeInventory(products, inventory) that returns a new array where each object combines:

name (from the product list)

price (from the product list)

stock (from the inventory list)

If a product has no inventory info, assume stock = 0.

*/

const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 599 },
  { name: "Tablet", price: 399 },
];

const inventory = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];

/*
mergeInventory(products, inventory)
➞ [
  { name: "Laptop", price: 999, stock: 5 },
  { name: "Phone", price: 599, stock: 0 },
  { name: "Tablet", price: 399, stock: 0 }
]
 */

function mergeInventory(products, inventory) {
  return products.map((product) => {
    const matchingInventory = inventory.find(
      (item) => item.name === product.name
    );
    return {
      name: product.name,
      price: product.price,
      stock: matchingInventory ? matchingInventory.stock : 0,
    };
  });
}

console.log(mergeInventory(products, inventory));
