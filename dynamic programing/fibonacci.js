const fibonacciMemo = (n, memo = {}) => {
	if (n == 0) {
		return 0;
	}
	if (n == 1 || n == 2) {
		return 1;
	}
	if (memo[n]) {
		return memo[n];
	}
	memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
	return memo[n];
};

console.log(fibonacciMemo(4));
console.log(fibonacciMemo(656));

const fibonacciTable = (n) => {
	const table = Array(n+1).fill(0);
	table[1] = 1;
	for(let i=0; i<=n; i++) {
		table[i+1] += table[i];
		table[i+2] += table[i];
	}
	return table[n];
};

console.log(fibonacciTable(4));
console.log(fibonacciTable(100));
