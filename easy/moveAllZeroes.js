const moveAllZeroes = (arr, n) => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i] !== 0) {
			arr[count++] = arr[i];
		}
	}
	while (count < n) {
		arr[count++] = 0;
	}
	return arr;
};

const arr = [3, 5, 0, 0, 4];
console.log(moveAllZeroes(arr, arr.length));
