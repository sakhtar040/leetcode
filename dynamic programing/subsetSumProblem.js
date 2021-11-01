const subsetSumProblem = (targetSum, numbers, length) => {
    if(targetSum == 0) {
        return true;
    }

    if(length == 0) {
        return false;
    }

    if(targetSum < numbers[length - 1]) {
        return subsetSumProblem(targetSum, numbers, length-1);
    }

    let isSubsetPresent = subsetSumProblem(targetSum, numbers, length -1) || subsetSumProblem(targetSum - numbers[length - 1], numbers, length-1);
    if(isSubsetPresent == true) {
        return 1;
    } else {
        return 0;
    }
}

console.log(subsetSumProblem(30, [3, 34, 4, 12, 5, 2], 6));