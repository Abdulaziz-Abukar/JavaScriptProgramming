const items = [
    { name: "Shirt", category: "Clothing" },
    { name: "Laptop", category: "Electronics" },
    { name: "Pants", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Hat", category: "Clothing" }
];

const categoryCount = items.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category]++;
    } else {
      acc[item.category] = 1;
    }
    return acc;
  }, {});

console.log(categoryCount);