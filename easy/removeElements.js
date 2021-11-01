const array = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElements = (array, val) => {
	let obj = {};
	for (let i = 0; i < array.length; i++) {
		if (array[i] == val) {
			continue;
		} else {
			obj[i] = array[i];
		}
	}
	console.log(obj);
	let len = Object.keys(obj).length;
	array.splice(len);
	for (let i = 0; i < len; i++) {
		array[i] = obj[Object.keys(obj)[i]];
	}
	return array.length;
};

console.log(removeElements(array, val));

var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};
