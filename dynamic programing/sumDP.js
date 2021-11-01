//canSum
const canSumMemo = (targetSum, numbers, memo = {}) => { // Before -> O(n^m) || After -> (n*m)
    if(targetSum in memo) {
        return memo[targetSum];
    }
    if(targetSum == 0) {
        return true;
    }
    if(targetSum < 0) {
        return false;
    }

    for(let number of numbers) {
        let remainingTarget = targetSum - number;
        if(canSumMemo(remainingTarget, numbers, memo)) {
            memo[remainingTarget] = true;
            return memo[remainingTarget];
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log("CanSumMemo ==============================")
console.log(canSumMemo(7, [2, 3])); //true
console.log(canSumMemo(8, [2, 3, 5])); //true
console.log(canSumMemo(7, [2, 4])); //false
console.log(canSumMemo(300, [7, 14])); //false

const canSumTable = (targetSum, numbers) => { // Before -> O(n^m) || After -> (n*m)
    const table = Array(targetSum+1).fill(false);
    table[0] = true;

    for(let i=0; i<targetSum; i++) {
        if(table[i] == true) {
            for(let num of numbers) {
                table[i+num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log("CanSumTable ==============================")
console.log(canSumTable(7, [2, 3])); //true
console.log(canSumTable(8, [2, 3, 5])); //true
console.log(canSumTable(7, [2, 4])); //false
console.log(canSumTable(300, [7, 14])); //false


//howSum
const howSumMemo = (targetSum, numbers, memo = {}) => { // Before -> O(n^m * m) || After -> O(n * m^2)
    if(targetSum in memo) {
        return memo[targetSum];
    }
    if(targetSum == 0) {
        return []
    }
    if(targetSum < 0) {
        return null;
    }

    for(let number of numbers) {
        let remainingTarget = targetSum - number;
        let resultArray = howSumMemo(remainingTarget, numbers, memo);
        if(resultArray != null) {
            memo[remainingTarget] = [...resultArray, number];
            return memo[remainingTarget];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log("HowSumMemo =============================")
console.log(howSumMemo(7, [2, 3])); // [3, 2, 2]
console.log(howSumMemo(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumMemo(7, [2, 4])); // null
console.log(howSumMemo(300, [7, 14])); // null

const howSumTable = (targetSum, numbers) => { // Before -> O(n^m * m) || After -> O(n * m^2)
    const table = Array(targetSum+1).fill(null);
    table[0] = []

    for(let i=0; i<targetSum; i++) {
        if(table[i] != null) {
            for(let num of numbers) {
                table[i+num] = [...table[i], num];
            }
        }
    }
    return table[targetSum]
}

console.log("HowSumTable =============================")
console.log(howSumTable(7, [2, 3])); // [3, 2, 2]
console.log(howSumTable(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumTable(7, [2, 4])); // null
console.log(howSumTable(300, [7, 14])); // null

//bestSum
const bestSumMemo = (targetSum, numbers, memo = {}) => { // Before -> O(n^m * m) || After -> O(n * m^2)
    if(targetSum in memo) {
        return memo[targetSum];
    }
    if(targetSum == 0) {
        return []
    }
    if(targetSum < 0) {
        return null;
    }

    let bestSolution = null;

    for(let number of numbers) {
        let remainingTarget = targetSum - number;
        let resultArray = bestSumMemo(remainingTarget, numbers, memo);
        if(resultArray != null) {
            let combination = [...resultArray, number];
            if(bestSolution == null || combination.length < bestSolution.length) {
                bestSolution = combination;
            }
        }
    }

    memo[targetSum] = bestSolution;
    return memo[targetSum];
}

console.log("BestSumMemo =============================")
console.log(bestSumMemo(7, [5, 3, 4, 7])); // [7]
console.log(bestSumMemo(8, [2, 3, 5])); // [3, 5]
console.log(bestSumMemo(8, [1, 4, 5])); // [4, 4]
console.log(bestSumMemo(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
console.log(bestSumMemo(300, [7, 14])); // null

const bestSumTable = (targetSum, numbers) => { // Before -> O(n^m * m) || After -> O(n * m^2)
    const table = Array(targetSum+1).fill(null);
    table[0] = [];

    for(let i=0; i<targetSum; i++) {
        if(table[i] != null) {
            for(let num of numbers) {
                if(table[i+num] != null) {
                    if([...table[i], num].length < table[i+num].length) {
                        table[i+num] = [...table[i], num];
                    }
                } else {
                    table[i+num] = [...table[i], num];
                }
            }
        }
    }
    return table[targetSum]
}

console.log("BestSumTable =============================")
console.log(bestSumTable(7, [5, 3, 4, 7])); // [7]
console.log(bestSumTable(8, [2, 3, 5])); // [3, 5]
console.log(bestSumTable(8, [1, 4, 5])); // [4, 4]
console.log(bestSumTable(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
console.log(bestSumTable(300, [7, 14])); // null