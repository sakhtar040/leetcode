//canConstruct
const canConstructMemo = (targetString, wordBank, memo ={}) => { // Before -> O(n^m *m) || After -> O(n * m^2)
    if(targetString in memo) {
        return memo[targetString];
    }
    if(targetString == "") {
        return true
    }

    for(let word of wordBank) {
        if(targetString.indexOf(word) === 0) {
            let suffix = targetString.slice(word.length);
            if(canConstructMemo(suffix, wordBank, memo)) {
                memo[suffix] = true;
                return memo[suffix];
            }
        }
    }
    memo[targetString] = false;
    return false;
}

console.log("CanConstructMemo =================================")
console.log(canConstructMemo("abcdef", ["a","b","c","d","e","f"])) // true
console.log(canConstructMemo("abcdef", ["ab","abc","cd","def","abcd"])) // true
console.log(canConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"])) // false
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])) // false
console.log(canConstructMemo("purple", ["purp","p","ur","le","purpl"])) // true

const canConstructTable = (targetString, wordBank) => { // Before -> O(n^m *m) || After -> O(n * m^2)
    const table = Array(targetString.length + 1).fill(false);
    table[0] = true;

    for(let i=0; i< targetString.length; i++) {
        if(table[i] == true) {
            for(let word of wordBank) {
                if(targetString.slice(i, i+word.length) == word) {
                    table[i+word.length] = true;
                }
            }
        }
    }
    return table[targetString.length];
}

console.log("CanConstructTable =================================")
console.log(canConstructTable("abcdef", ["a","b","c","d","e","f"])) // true
console.log(canConstructTable("abcdef", ["ab","abc","cd","def","abcd"])) // true
console.log(canConstructTable("skateboard", ["bo","rd","ate","t","ska","sk","boar"])) // false
console.log(canConstructTable("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])) // false
console.log(canConstructTable("purple", ["purp","p","ur","le","purpl"])) // true

//countConstruct
const countConstructMemo = (targetString, wordBank, memo = {}) => { // Before -> O(n^m *m) || After -> O(n * m^2)
    if(targetString in memo) {
        return memo[targetString];
    }
    if(targetString == "") {
        return 1;
    }

    let totalCount = 0;
    for(let word of wordBank) {
        if(targetString.indexOf(word) === 0) {
            let suffix = targetString.slice(word.length);
            let count = countConstructMemo(suffix, wordBank, memo)
            totalCount += count;
        }
    }
    memo[targetString] = totalCount;
    return totalCount;
}

console.log("CountConstructMemo ==============================")
console.log(countConstructMemo("abcdef", ["a","b","c","d","e","f"])) // 1
console.log(countConstructMemo("abcdef", ["ab","abc","cd","def","abcd"])) // 1
console.log(countConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"])) // 0
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])) // 0
console.log(countConstructMemo("purple", ["purp","p","ur","le","purpl"])) // 2

const countConstructTable = (targetString, wordBank) => { // Before -> O(n^m *m) || After -> O(n * m^2)
    const table = Array(targetString.length + 1).fill(0);
    table[0] = 1;

    for(let i=0; i< targetString.length; i++) {
        for(let word of wordBank) {
            if(targetString.slice(i, i+word.length) == word) {
                table[i+word.length] += table[i];
            }
        }
    }
    return table[targetString.length];
}

console.log("CountConstructTable ==============================")
console.log(countConstructTable("abcdef", ["a","b","c","d","e","f"])) // 1
console.log(countConstructTable("abcdef", ["ab","abc","cd","def","abcd"])) // 1
console.log(countConstructTable("skateboard", ["bo","rd","ate","t","ska","sk","boar"])) // 0
console.log(countConstructTable("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])) // 0
console.log(countConstructTable("purple", ["purp","p","ur","le","purpl"])) // 2

//allConstruct
const allConstructMemo = (targetString, wordBank, memo = {}) => { // O(n^m)
    if(targetString in memo) {
        return memo[targetString];
    }
    if(targetString == "") {
        return [[]]
    }

    let finalArray = [];

    for(let word of wordBank) {
        if(targetString.indexOf(word) === 0) {
            let suffix = targetString.slice(word.length);
            let resultArray = allConstructMemo(suffix, wordBank, memo);
            let combinations = resultArray.map(array => [word, ...array]);
            finalArray.push(...combinations);
        }
    }
    memo[targetString] = finalArray;
    return finalArray;
}

console.log("AllConstructMemo =================================")
console.log(allConstructMemo("abcdef", ["a","b","c","d","e","f"]))
console.log(allConstructMemo("abcdef", ["ab","abc","cd","def","abcd"]))
console.log(allConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
console.log(allConstructMemo("purple", ["purp","p","ur","le","purpl"]))
console.log(allConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"]))

const allConstructTable = (targetString, wordBank) => { // O(n^m)
    const table = Array(targetString.length + 1).fill().map(() => []);
    table[0] = [[]];

    for(let i=0; i<= targetString.length; i++) {
        for(let word of wordBank) {
            if(targetString.slice(i, i+word.length) == word) {
                let result = table[i].map(arr => [...arr, word]);
                table[i+word.length].push(...result);
            }
        }
    }
    return table[targetString.length];
}

console.log("AllConstructTable =================================")
console.log(allConstructTable("abcdef", ["a","b","c","d","e","f"]))
console.log(allConstructTable("abcdef", ["ab","abc","cd","def","abcd"]))
console.log(allConstructTable("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
console.log(allConstructTable("purple", ["purp","p","ur","le","purpl"]))
