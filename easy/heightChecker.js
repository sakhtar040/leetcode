const array = [1, 2, 3, 4, 5];

const sortArray = (array) => {
	return array.sort((a, b) => a - b);
};

const heightChecker = (array) => {
	let heights = [...array];
	let expected = sortArray(array);
	let count = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] != expected[i]) {
			count++;
		}
	}

	return count;
};

console.log(heightChecker(array));
