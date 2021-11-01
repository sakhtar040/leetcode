const array = [0, 0, 5, -41, 0, 0, -21];

const replaceElements = (array) => {
	let finalArray = [];
	for (let i = 0; i < array.length; i++) {
		let newArray = array.slice(i + 1);
		if (newArray.length == 0) {
			finalArray.push(-1);
		} else {
			finalArray.push(Math.max(...newArray));
		}
	}
	return finalArray;
};

console.log(replaceElements(array));
