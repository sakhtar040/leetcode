const array = [1, 1];

const findDisappearedNumbers = (nums) => {
	let obj = {}
	for(let i=0; i<array.length; i++) {
		obj[array[i]] = array[i]
	}
	console.log(Object.keys(obj))
	let newArray = []
	for(let i=1; i<=array.length; i++) {
		if(!Object.keys(obj).includes(''+i)) {
			newArray.push(i)
		}
	}
	return newArray
};

console.log(findDisappearedNumbers(array));

/* let length = nums.length;
let arr = [];
for (let i = 0; i < length; i++) {
	arr[i] = i + 1;
}
for (v of nums) {
	arr[v - 1] = -1;
}
return arr.filter((i) => i > 0); */
