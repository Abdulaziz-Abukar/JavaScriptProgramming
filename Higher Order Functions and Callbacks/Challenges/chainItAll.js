const transactions = [
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 300 },
  { type: "withdrawal", amount: 75 },
  { type: "deposit", amount: 400 }
];


const totalBalance = transactions.reduce((accumulator, item) => {
    if (item.type === "deposit") {
        return accumulator += item.amount;
    } else if (item.type === "withdrawal") {
        return accumulator -= item.amount;
    }
}, 0)

console.log(totalBalance);