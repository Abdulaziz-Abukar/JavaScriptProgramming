/*
You’re given an array of transactions. Each transaction has:

id (number)

amount (number)

category (string)

Write a function groupByCategory(transactions) that returns an object where:

Each key is a category

The value is the total sum of amounts in that category
*/
const transactions = [
  { id: 1, amount: 25, category: "food" },
  { id: 2, amount: 100, category: "clothing" },
  { id: 3, amount: 15, category: "food" },
  { id: 4, amount: 80, category: "electronics" },
  { id: 5, amount: 20, category: "clothing" },
];

function groupByCategory(transactions) {
  const results = {};
  for (const item of transactions) {
    if (!results[item.category]) {
      results[item.category] = item.amount;
    } else {
      results[item.category] += item.amount;
    }
  }

  return results;
}

function groupByCategoryVersionTwo(transactions) {
  return transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;

    // if the category key doesn't exist yet, initialize it
    if (!acc[category]) {
      acc[category] = amount;
    } else {
      acc[category] += amount;
    }

    return acc;
  }, {});
}

console.log(groupByCategoryVersionTwo(transactions));
