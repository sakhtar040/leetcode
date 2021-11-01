const gripDpMemo = (m, n, memo = {}) => {
    let key = `${m}_${n}`;
    if(m==0 || n == 0) {
        return 0;
    }
    if(m == 1 || n == 1) {
        return 1;
    }
    if(key in memo) {
        return memo[key];
    }
    memo[key] = gripDpMemo(m-1, n, memo) + gripDpMemo(m, n-1, memo);
    return memo[key];
}

console.log(gripDpMemo(2,3));
console.log(gripDpMemo(3,3));
console.log(gripDpMemo(18,18));

const gripDpTable = (m, n) => {
    const matrix = Array(m+1).fill().map(() => Array(n+1).fill(0));
    matrix[1][1] = 1;
    for(let i=0; i<=m; i++) {
        for(let j=0; j<=n; j++) {
            let current = matrix[i][j];

            if(i+1 <= m) matrix[i+1][j] += current;
            if(j+1 <= n) matrix[i][j+1] += current;
        }
    }
    return matrix[m][n];
}

console.log(gripDpTable(2,3));
console.log(gripDpTable(3,3));
console.log(gripDpTable(18,18));