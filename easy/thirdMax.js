const array = [2, 1];

const thirdMax = (array) => {
	if (array.length <= 2) {
		return Math.max(...array);
	} else {
		let set = new Set(array);
		if (set.size >= 3) {
			set.delete(Math.max(...set));
			set.delete(Math.max(...set));
			return Math.max(...set);
		} else {
			return Math.max(...set);
		}
	}
};

console.log(thirdMax(array));
