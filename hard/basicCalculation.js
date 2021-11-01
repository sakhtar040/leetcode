const basicStringCalculation = (s) => {
	if (s.length === 0) return 0;

	s = s.replace(/\s/g, "");

	let i = 0;
	let sum = 0;
	let positive = true;
	let numStr = "";
	while (i < s.length) {
		if (s[i] === "(") {
			sum += positive ? Number(numStr) : 0 - Number(numStr);
			numStr = "";
			let openCount = 1;
			let j = i + 1;
			while (openCount > 0) {
				if (s[j] === "(") openCount++;
				if (s[j] === ")") openCount--;
				j++;
			}
			j--;
			let calculatedNum = basicStringCalculation(s.substring(i + 1, j));
			sum += positive ? calculatedNum : 0 - calculatedNum;
			i = j;
		}
		if (s[i].match(/\d/)) numStr += s[i];
		if (s[i].match(/\+|\-/)) {
			sum += positive ? Number(numStr) : 0 - Number(numStr);
			numStr = "";
			positive = s[i] === "+";
		}
		i++;
	}
	if (numStr.length) sum += positive ? Number(numStr) : 0 - Number(numStr);
	return sum;
};

let str = "(1+(4+5+2)-3)+(6+8)";

console.log(basicStringCalculation(str));
