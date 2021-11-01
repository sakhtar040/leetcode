const knapsack = (w, wtArray, valArray, n, memo = {}) => {
	if (w == 0 || n == 0) {
		return 0;
	}
	if (wtArray[n - 1] > w) {
		return knapsack(w, wtArray, valArray, n - 1, memo);
	}
	if (memo[`${w}_${n}`]) {
		return memo[`${w}_${n}`];
	}
	memo[`${w}_${n}`] = Math.max(valArray[n - 1] + knapsack(w - wtArray[n - 1], wtArray, valArray, n - 1, memo), knapsack(w, wtArray, valArray, n - 1, memo));
	return memo[`${w}_${n}`];
};

let weight = 50;
let weightArray = [10,20,30];
let valueArray = [60,100,120];

console.log(knapsack(weight, weightArray, valueArray, weightArray.length));
