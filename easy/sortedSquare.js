const array = [-4,-1,-1,0,3,10]

const sortedSquare = (array) => {
    //No edge case handled
	let obj = {}
	let newArray = [];
	for(let i=0; i<array.length; i++){
		array[i] = array[i] * array[i];
		obj[array[i]] = array[i]
	}
	for(let key in obj) {
		newArray.push(obj[key])
	}
	console.log(obj, newArray)
	return array
	
    //by function
	array = array.map(item => item * item).sort((a, b) => a-b);
	return array
	
    //every edge case handled
	let n = array.length;
    let newArray = [];
    let index = n - 1;
    let l = 0, r = n - 1;
	while (l <= r) {
		if (Math.abs(array[l]) < Math.abs(array[r])) {
			newArray[index--] = array[r] * array[r];
			r--;
		} else {
			newArray[index--] = array[l] * array[l];
			l++;
		}
	}
	return newArray;
}

console.log(sortedSquare(array));