const binomialCoefficients = (n, k, memo = {}) => {
	if (k == 0 || k == n) {
		return 1;
	}
	if (memo[`${n}_${k}`]) {
		return memo[`${n}_${k}`];
	}
	memo[`${n}_${k}`] = binomialCoefficients(n - 1, k - 1, memo) + binomialCoefficients(n - 1, k, memo);
	return memo[`${n}_${k}`];
};

console.log(binomialCoefficients(100, 50));
