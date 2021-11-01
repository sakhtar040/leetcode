const array = [3, 1, 2, 4, 5, 6, 7, 8, 9, 0];

const sortArrayByParity = (array) => {
	let evenArray = [];
	let oddArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			evenArray.push(array[i]);
		} else {
			oddArray.push(array[i]);
		}
	}
	return [...evenArray, ...oddArray];
};

console.log(sortArrayByParity(array));
