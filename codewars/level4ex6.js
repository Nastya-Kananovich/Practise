/* How many ways can you make the sum of a number? 
In number theory and combinatorics, a partition of a positive integer n, also called 
an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in 
the order of their summands are considered the same partition. If order matters, the sum becomes a composition. 
For example, 4 can be partitioned in five distinct ways:
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1 */

function sum(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; 

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      dp[j] += dp[j - i];
    }
  }
  return dp[n];
}

console.log("sum(1)  ", sum(1));
console.log("sum(2)  ", sum(2));
console.log("sum(3)  ", sum(3));
console.log("sum(4)  ", sum(4));
console.log("sum(5)  ", sum(5));
console.log("sum(10) ", sum(10));

