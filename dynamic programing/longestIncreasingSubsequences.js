const longestIncreasingSubsequences = (array) => {
    let lis = array.map(item => {
        return 1
    });
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1
            }
        }
    }
    let max = 0;
    for (let i = 0; i < lis.length; i++) {
        if (max < lis[i]) {
            max = lis[i]
        }
    }
    return max;
}

console.log("length of longest increasing subsequence is: ", longestIncreasingSubsequences([10,9,2,5,3,7,101,18]))