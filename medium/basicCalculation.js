const basicStringCalculation = (str) => {
	let num = 0;
	let sign = null;
	let expressionArray = [];
	for (let i = 0; i <= str.length; i++) {
		let value = str[i];
		if (!isNaN(value)) {
			num = num * 10 + Number(value);
			console.log("Num", num, value);
		}
		if (isNaN(value)) {
			num = Number(num);
			console.log("numnum", num, value, sign);
			switch (sign) {
				case "+":
				case null:
					expressionArray.push(num);
					break;

				case "-":
					expressionArray.push(-1 * num);
					break;

				case "*":
					expressionArray.push(expressionArray.pop() * num);
					break;

				case "/":
					expressionArray.push(parseInt(expressionArray.pop() / num, 10));
					break;
			}
			sign = value;
			num = 0;
		}
		console.log("expressionArray", expressionArray);
	}
	return expressionArray.reduce((a, b) => {
		return a + b;
	}, 0);
};

let str = "3+2+3*2";

console.log(basicStringCalculation(str));
