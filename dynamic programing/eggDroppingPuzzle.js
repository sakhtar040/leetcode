const eggDroppingPuzzle = (n, k, memo = {}) => {
	if (n == 0) {
		return 0;
	}

    if (n == 1) {
		return k;
	}

	if (k == 0 || k == 1) {
		return k;
	}

	if (memo[`${n}_${k}`]) {
		return memo[`${n}_${k}`]+1;
	}

    let min = Number.MAX_VALUE;
    let val;

	for (let i = 1; i <= n; i++) {
        val = Math.max(eggDroppingPuzzle(n - 1, i - 1, memo), eggDroppingPuzzle(n, k - i, memo));
        if (val < min) {
            min = val;
            memo[`${n}_${k}`] = min;
        }
    }
    
    return memo[`${n}_${k}`]+1;
};

console.log(eggDroppingPuzzle(4, 5000));



/* const eggDroppingPuzzle = (n, k) => {
	const M = 300; // big enough number
    const dp = Array.from({length: M+1}, () => Array(n+1).fill(0));
    
    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= n; j++) {
            dp[i][j] = 1 + dp[i-1][j] + dp[i-1][j-1];
            if(dp[i][j] >= k) return i;
        }
    }
}; */

console.log(eggDroppingPuzzle(4, 5000));
