const coinChange = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) {
        return memo[targetSum]
    }
    if(targetSum == 0) {
        return [[]];
    }
    if(targetSum < 0) {
        return null;
    }

    let finalArray = [];
    for(let num of numbers) {
        let remainingTarget = targetSum - num;
        let resultArray = coinChange(remainingTarget, numbers);
        if(resultArray != null) {
            let combinations = resultArray.map(array => [num, ...array]);
            finalArray.push(...combinations);
        }
    }
    memo[targetSum] = finalArray;
    return memo[targetSum];
}

console.log(coinChange(10, [2,5,3,6]));