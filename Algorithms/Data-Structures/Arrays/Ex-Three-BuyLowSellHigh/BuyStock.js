/*
Given an array of stock prices (closing prices), find the maximum profit you can make by buying once and selling once later.

You must buy before you sell.
*/

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
